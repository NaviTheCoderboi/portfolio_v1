"use client";
import React from "react";
import { Socials } from "$lib/constants/constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import LanguagesAndTechnologies from "$component@sections/LanguagesAndTechnologies";

const Social = ({
    social,
}: {
    social: { name: string; image: any; href: string; type?: string | null };
}) => {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    const colors = () => {
        if (randomNumber === 1) {
            return "bg-gradient-to-t";
        } else if (randomNumber === 2) {
            return "bg-gradient-to-tr";
        } else if (randomNumber === 3) {
            return "bg-gradient-to-r";
        } else if (randomNumber === 4) {
            return "bg-gradient-to-br";
        } else if (randomNumber === 5) {
            return "bg-gradient-to-b";
        } else if (randomNumber === 6) {
            return "bg-gradient-to-bl";
        } else if (randomNumber === 7) {
            return "bg-gradient-to-l";
        } else if (randomNumber === 8) {
            return "bg-gradient-to-tl";
        }
    };
    return (
        <Tilt
            className={`flex flex-col justify-center items-center h-full w-auto ${colors()} from-slate-700 via-violet-950 to-violet-900 rounded-2xl gap-5`}
        >
            <div className="h-3/5 flex justify-center items-center">
                <a href={social.href} target="_blank" rel="noreferrer">
                    <social.image className="text-[5rem] text-white/80 border-slate-400 rounded-full border-b-0 border-2 p-3 bg-gradient-to-br from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-500 duration-500" />
                </a>
            </div>
            <div className="w-4/5 h-[0.5px] bg-white/80" />
            <div className="text-2xl font-extrabold tracking-tight text-center">
                {social.name}
            </div>
        </Tilt>
    );
};

const about = () => {
    return (
        <section className="min-h-screen w-full" id="about">
            <div className="flex flex-col gap-8 w-3/5 mx-auto py-20 h-full">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 mt-12"
                >
                    <div className="text-xl font-light tracking-tight uppercase">
                        Know me now
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
                    India. I am currently in 9th grade. I want to be a doctor.
                    Coding is my hobby and i like coding in my free time. I like
                    to write code in typescript, idk why i got sticked to it
                    when i first time used it. physics, biology and computer are
                    my favorite subjects.
                </motion.div>
                <motion.div
                    className="text-3xl font-bold tracking-tight mt-6"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Socials
                </motion.div>
                <div className="grid grid-flow-row grid-cols-3 grid-rows-1 gap-20 p-4 h-[300px]">
                    {Socials.map((social) => {
                        return (
                            <motion.div
                                key={social.name}
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: social.delay }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Social social={social} />
                            </motion.div>
                        );
                    })}
                </div>
                <LanguagesAndTechnologies />
            </div>
        </section>
    );
};

export default about;
