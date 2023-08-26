"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import LanguagesAndTechnologies from "$component@sections/LanguagesAndTechnologies";

const about = () => {
    return (
        <section className="min-h-screen w-full" id="about">
            <div className="flex flex-col gap-28 w-3/5 mx-auto pt-36 pb-8 h-full">
                <div className="flex flex-col gap-5 w-full">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2"
                    >
                        <div className="text-xl font-light tracking-tight uppercase">
                            Introduction
                        </div>
                        <div className="text-[4rem] font-bold tracking-tight">
                            About
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-xl tracking-tight font-normal text-white/60 w-4/5"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Hello! I am Navinder Singh, a high-school student from
                        India. I am currently in 9th grade. I want to be a
                        doctor. Coding is my hobby and i like coding in my free
                        time. I like to write code in typescript, idk why i got
                        sticked to it when i first time used it. physics,
                        biology and computer are my favorite subjects.
                        <br />
                        <br />
                        Some of my skills are listed below {"->"}
                    </motion.div>
                </div>
                <LanguagesAndTechnologies />
            </div>
        </section>
    );
};

export default about;
