import Blog from "$component@Blog";
import { getBlogs, getBlog } from "$lib/blogs";

export async function generateStaticParams() {
    let blogs = await getBlogs();

    return blogs.map((blog) => ({
        slug: blog.frontmatter.slug,
    }));
}

const page = async ({ params }: { params: { slug: string } }) => {
    let blog = await getBlog(params.slug);
    return <Blog blog={blog} />;
};

export default page;
