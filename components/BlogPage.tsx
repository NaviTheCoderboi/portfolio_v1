"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image, { StaticImageData } from "next/image";
import { format, parseISO } from "date-fns";
import covers from "$content/assets";
import { motion } from "framer-motion";
import { notFound } from "$public";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
    let frontMatter: {
        title: string;
        description: string;
        posted_at: string;
        read: string;
        tags: string[];
        cover_image: StaticImageData;
        img_path: string;
        slug: string;
        headings: any;
    } = blog.frontmatter;
    // @ts-ignore
    frontMatter.cover_image = covers[frontMatter.img_path];
    return (
        <div className="flex gap-5 w-full h-auto p-4 bg-slate-700/30 rounded-xl">
            <div className="w-full flex flex-col gap-5 md:w-3/4 h-full">
                <Link
                    href={`/blog/${frontMatter.slug}`}
                    className="text-xl font-medium tracking-tighter hover:text-blue-400 duration-500"
                >
                    {frontMatter.title}
                </Link>
                <div className="text-base font-normal text-slate-300">
                    {frontMatter.description}
                </div>
                <div className="text-sm font-medium text-slate-400">
                    {format(parseISO(frontMatter.posted_at), "LLLL d, yyyy")}
                </div>
                <div className="flex gap-4 text-sm font-medium text-slate-400/90">
                    <div>{frontMatter.read}</div>
                    {frontMatter.tags.map(
                        (tag: string, idx: React.Key | null | undefined) => (
                            <div className="text-slate-400/70" key={idx}>
                                {tag}
                            </div>
                        ),
                    )}
                </div>
            </div>
            <div className="hidden md:block w-1/4 p-2">
                <motion.div
                    className="w-full h-full rounded-r-xl object-cover object-right"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={frontMatter.cover_image}
                        alt={"alt"}
                        style={
                            {
                                clipPath:
                                    "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
                            } as React.CSSProperties
                        }
                        className="w-full h-full rounded-r-xl object-cover object-right"
                        loading="lazy"
                        quality={100}
                    />
                </motion.div>
            </div>
        </div>
    );
};

const Page = ({ blogs }: { blogs: any }) => {
    const [search, setSearch] = React.useState("");
    const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);
    const filter = (search: string) => {
        setFilteredBlogs(
            blogs.filter((blog: any) =>
                blog.frontmatter.title.toLowerCase().includes(search),
            ),
        );
    };

    const searchBlog = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            filter(search);
        }
    };
    return (
        <div className="h-screen w-full">
            <div className="w-9/12 md:w-2/5 mx-auto p-1 md:p-2 mt-40 purple-pink-gradient rounded-full">
                <div className="flex gap-2 justify-center items-center w-full p-2 bg-slate-800 rounded-full">
                    <AiOutlineSearch
                        className="text-4xl hover:text-blue-400 p-1 duration-500"
                        onClick={() => filter(search)}
                    />
                    <input
                        type="text"
                        className="w-full outline-none bg-transparent px-2 md:px-4 py-1 text-xl font-medium tracking-tight"
                        placeholder="Search blogs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => searchBlog(e)}
                    />
                </div>
            </div>
            {filteredBlogs.length !== 0 ? (
                <div className="md:w-3/5 mx-auto px-8 h-full flex flex-col gap-10 py-16 md:py-36">
                    {filteredBlogs.map(
                        (blog: any, idx: React.Key | null | undefined) => (
                            <BlogCard blog={blog} key={idx} />
                        ),
                    )}
                </div>
            ) : (
                <div className="h-[70vh] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4 text-4xl font-bold text-blue-300">
                        <Image
                            className="rounded-xl"
                            src={notFound}
                            alt="not-found"
                            width={400}
                            height={200}
                        />
                        No results to show
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
