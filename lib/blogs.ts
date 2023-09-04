import fs from "node:fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import covers from "$content/assets";
import remarkGFM from "remark-gfm";

export const getBlogs = async () => {
    let blog_files = await fs.readdir("content/blogs");
    let blogs = await Promise.all(
        blog_files.map(async (blog_file) => {
            let content = await fs.readFile(
                `content/blogs/${blog_file}`,
                "utf-8",
            );
            let parsed = await serialize(content, {
                parseFrontmatter: true,
            });
            parsed.frontmatter.slug = blog_file.replace(".mdx", "");
            return parsed;
        }),
    );
    return blogs;
};

export const getBlog = async (slug: string) => {
    let content = await fs.readFile(`content/blogs/${slug}.mdx`, "utf-8");

    let headingsContent = content;
    const codeBlockRegex = /```[\s\S]*?```/g;
    headingsContent = headingsContent.replace(codeBlockRegex, "");

    const regex = /^(#+)\s+(.+)/gm;
    const headings = [];
    let match;

    while ((match = regex.exec(headingsContent)) !== null) {
        const level = match[1].length; // Calculate the heading level based on the number of '#'
        const title = match[2].trim(); // Trim any leading/trailing whitespace
        headings.push({ level, title });
    }

    let parsed = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [rehypeSlug],
            remarkPlugins: [remarkGFM],
        },
    });
    // @ts-ignore
    parsed.frontmatter.cover_image = covers[parsed.frontmatter.img_path];
    parsed.frontmatter.slug = slug;
    parsed.frontmatter.headings = headings;
    return parsed;
};
