"use client";
import React from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { GiPlainCircle } from "react-icons/gi";
import { GoCircle } from "react-icons/go";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SlCalender } from "react-icons/sl";
import { format, parseISO } from "date-fns";

const Blog = ({
    blog,
}: {
    blog: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
}) => {
    const getRandomBg = () => {
        let colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-violet-500",
            "bg-pink-500",
        ];
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };
    return (
        <div className="min-h-screen w-full">
            <div className="w-[65%] h-full mx-auto mt-44 px-2 grid grid-cols-1 sm:gap-12 lg:grid-cols-12">
                <div className="flex flex-col gap-12 col-span-1 lg:col-span-8">
                    <Image
                        src={blog.frontmatter.cover_image as StaticImport}
                        alt={blog.frontmatter.title as string}
                        className="w-full h-[30rem] rounded-xl"
                    />
                    <div className="text-3xl font-bold text-center w-full py-3">
                        {blog.frontmatter.title as string}
                    </div>
                    <article className="w-full h-auto prose-sm md:prose prose-zinc">
                        <MDXRemote {...blog} />
                    </article>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-44">
                        <div className="w-full h-auto flex flex-col gap-5">
                            <div className="text-2xl font-semibold">
                                Table Of Contents
                            </div>
                            <div className="w-full h-auto">
                                {
                                    // @ts-ignore
                                    blog.frontmatter.headings.map(
                                        (
                                            heading: {
                                                title: string;
                                                level: number;
                                            },
                                            idx: React.Key | undefined
                                        ) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-start items-center gap-3 text-xl font-normal text-blue-400 hover:underline hover:text-blue-300 cursor-pointer duration-150
                                                    ${
                                                        heading.level == 2
                                                            ? "pl-8"
                                                            : heading.level == 3
                                                            ? "pl-16"
                                                            : ""
                                                    }
                                                    `}
                                            >
                                                {heading.level == 2 ? (
                                                    <GoCircle className="text-sm text-white" />
                                                ) : heading.level == 3 ? (
                                                    <GiPlainCircle className="text-sm text-white" />
                                                ) : (
                                                    <GiPlainCircle className="text-sm text-white" />
                                                )}
                                                {heading.title}
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col gap-5">
                            <div className="text-2xl font-semibold">Tags</div>
                            <div className="flex gap-3 w-full h-auto">
                                {
                                    // @ts-ignore
                                    blog.frontmatter.tags.map((tag: string) => (
                                        <div
                                            key={tag}
                                            className={`px-2 py-1 text-white rounded-full text-base font-medium ${getRandomBg()}`}
                                        >
                                            {tag}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex gap-3 justify-start items-center">
                                <SlCalender className="text-2xl text-pink-500" />
                                <div className="text-xl text-white font-normal">
                                    {format(
                                        parseISO(
                                            blog.frontmatter.posted_at as any
                                        ),
                                        "LLLL d, yyyy"
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
