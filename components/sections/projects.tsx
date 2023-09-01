"use client";
import { motion } from "framer-motion";
import React from "react";
import { Projects } from "$lib@constants/constants";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Project = ({
    title,
    description,
    image,
    link,
    github,
}: {
    title: string;
    description: string;
    image: any;
    link: string;
    github: string;
}) => {
    return (
        <Tilt className="h-full rounded-2xl p-[2px] green-pink-gradient">
            <div className="relative group h-full flex flex-col gap-5 p-2 bg-slate-800 rounded-2xl">
                <Image
                    src={image}
                    className="h-1/2 rounded-t-2xl"
                    alt={title}
                />
                <a
                    className="invisible group-hover:visible absolute top-5 left-5 text-slate-200 text-3xl p-2 rounded-full bg-gradient-to-br from-violet-900 via-blue-950 to-slate-800"
                    target="_blank"
                    href={link}
                >
                    <AiOutlineLink />
                </a>
                <a
                    className="invisible group-hover:visible absolute top-5 right-5 text-slate-200 text-3xl p-2 rounded-full bg-gradient-to-br from-violet-900 via-blue-950 to-slate-800"
                    target="_blank"
                    href={github}
                >
                    <AiFillGithub />
                </a>
                <div className="h-1/2 w-full flex flex-col items-center gap-4 px-6 py-3">
                    <div className="text-[1.2rem] font-medium">{title}</div>
                    <div className="text-[0.8rem] font-normal text-slate-300">
                        {" "}
                        {description}
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

const projects = () => {
    return (
        <section className="min-h-screen w-full" id="projects">
            <div className="flex flex-col gap-14 md:gap-28 w-4/5 md:w-3/5 mx-auto pt-36 pb-8 h-full">
                <div className="flex flex-col gap-5 w-full h-full">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2"
                    >
                        <div className="text-lg font-light tracking-tight uppercase">
                            what I have built
                        </div>
                        <div className="text-section-title-mobile md:text-section-title-md font-bold tracking-tight">
                            Projects
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-xl tracking-tight font-normal text-white/60 w-full md:w-4/5"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Following are some of the projects I have worked on.
                        They show my skills and my abilities . I have worked on
                        a lot of projects but these are the ones I am most proud
                        of. Don't forget to check them out!{"    "}
                        <a
                            className="inline-flex justify-center items-center text-blue-500 text-xl font-bold"
                            href="https://github.com/NaviTheCoderboi?tab=repositories"
                        >
                            More projects{" "}
                            <BsArrowRight className="inline-block ml-2 text-slate-200 text-2xl" />
                        </a>
                    </motion.div>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                    <div className="w-auto grid grid-flow-row grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-20 p-8 h-auto lg:h-[28rem]">
                        {Projects.map((project) => (
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: project.delay,
                                }}
                                className="h-full w-full"
                                key={project.title}
                            >
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    github={project.github}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default projects;
