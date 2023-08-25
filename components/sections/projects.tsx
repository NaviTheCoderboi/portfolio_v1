"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface project {
    title: string;
    description: string;
    cover: string;
    github: string;
    url: string;
    tags: string[];
}

const Project = ({ project }: { project: project }) => {
    return (
        <Tilt className="h-full w-full p-4">
            <Image
                src={project.cover}
                alt={project.title}
                height={90}
                width={120}
            />
        </Tilt>
    );
};

const projects = ({ projects }: { projects: project[] }) => {
    return (
        <div className="min-h-screen w-full" id="projects">
            <div className="flex flex-col gap-5 w-3/5 mx-auto py-5 h-full">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                >
                    <div className="text-xl font-light tracking-tight uppercase">
                        My projects to showcase
                    </div>
                    <div className="text-[4rem] font-bold tracking-tight">
                        Projects
                    </div>
                </motion.div>
                <div className="p-6 flex justify-around items-center h-1/3 w-full">
                    {projects.map((project) => {
                        return (
                            <Project project={project} key={project.title} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default projects;
