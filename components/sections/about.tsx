"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Skills } from "$public";
import Image from "next/image";
import { Experiences } from "$lib/constants/constants";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LanguagesAndTechnologies from "$component@sections/LanguagesAndTechnologies";

const SkillsSection = () => {
    const borderColors =
        " rounded-2xl border-2 border-t-blue-500 border-l-blue-400 border-b-violet-500 border-r-violet-400 hover:border-t-blue-400 hover:border-l-violet-500 hover:border-b-violet-400 hover:border-r-blue-500 duration-1000";
    return (
        <div className="p-3 w-full grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-flow-row sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-10">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Tilt className={"bg-slate-800 h-full" + borderColors}>
                    <Image
                        src={Skills.designer}
                        alt="designer"
                        className="h-1/2 w-full rounded-t-2xl"
                    />
                    <div className="h-1/2 w-full flex flex-col justify-center items-center gap-4 px-6 ">
                        <div className="text-[1.2rem] font-medium">
                            Designer
                        </div>
                        <div className="text-[0.8rem] font-normal text-slate-300">
                            {" "}
                            I merge aesthetics and functionality to craft
                            visually striking designs that serve a clear
                            purpose.
                        </div>
                    </div>
                </Tilt>
            </motion.div>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Tilt className={"bg-slate-800 h-full" + borderColors}>
                    <Image
                        src={Skills.backend}
                        alt="designer"
                        className="h-1/2 w-full rounded-t-2xl"
                    />
                    <div className="h-1/2 w-full flex flex-col justify-center items-center gap-4 px-6 ">
                        <div className="text-[1.2rem] font-medium">
                            Backend developer
                        </div>
                        <div className="text-[0.8rem] font-normal text-slate-300">
                            {" "}
                            With a blend of design finesse and frontend-backend
                            prowess, I create holistic digital solutions that
                            bridge art and technology.
                        </div>
                    </div>
                </Tilt>
            </motion.div>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Tilt className={"bg-slate-800 h-full" + borderColors}>
                    <Image
                        src={Skills.biology}
                        alt="designer"
                        className="h-1/2 w-full rounded-t-2xl"
                    />
                    <div className="h-1/2 w-full flex flex-col justify-center items-center gap-4 px-6 ">
                        <div className="text-[1.2rem] font-medium">Biology</div>
                        <div className="text-[0.8rem] font-normal text-slate-300">
                            {" "}
                            My passion for biology drives me to translate
                            scientific fascination into captivating web
                            creations that both educate and inspire.
                        </div>
                    </div>
                </Tilt>
            </motion.div>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <Tilt className={"bg-slate-800 h-full" + borderColors}>
                    <Image
                        src={Skills.frontend}
                        alt="designer"
                        className="h-1/2 w-full rounded-t-2xl"
                    />
                    <div className="h-1/2 w-full flex flex-col justify-center items-center gap-4 px-6 ">
                        <div className="text-[1.2rem] font-medium">
                            Frontend developer
                        </div>
                        <div className="text-[0.8rem] font-normal text-slate-300">
                            {" "}
                            I build frontend experiences that deeply resonate
                            with users and create backend systems that power
                            seamless interactions.
                        </div>
                    </div>
                </Tilt>
            </motion.div>
        </div>
    );
};

const ExperienceCard = ({
    experience,
}: {
    experience: { title: string; year: string; icon: any; description: string };
}): React.JSX.Element => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: "rgb(30 41 59)",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(30 41 59)" }}
            date={experience.year}
            iconStyle={{ background: "rgb(226 232 240)" }}
            icon={
                <div className="flex h-full w-full items-center justify-center">
                    <Image
                        src={experience.icon}
                        alt={experience.title}
                        className="h-full w-full object-contain"
                    />
                </div>
            }
        >
            <div className="flex flex-col gap-5">
                <h3 className="text-white text-2xl font-bold">
                    {experience.title}
                </h3>
                <div
                    className="text-xl font-semibold text-neutral-300"
                    style={{ margin: 0 }}
                >
                    {experience.year}
                </div>
                <div
                    className="text-lg font-medium text-slate-200"
                    style={{ margin: 0 }}
                >
                    {experience.description}
                </div>
            </div>
        </VerticalTimelineElement>
    );
};

const about = () => {
    return (
        <section className="min-h-screen w-full" id="about">
            <div className="flex flex-col gap-28 w-4/5 md:w-3/5 mx-auto pt-36 pb-8 h-full">
                <div className="flex flex-col gap-5 w-full h-full">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2"
                    >
                        <div className="text-lg font-light tracking-tight uppercase">
                            Introduction
                        </div>
                        <div className="text-section-title-mobile md:text-section-title-md font-bold tracking-tight">
                            About
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-xl tracking-tight font-normal text-white/60 w-full md:w-4/5"
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
                    <SkillsSection />
                </div>
                <div className="h-full w-full flex flex-col gap-5">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 items-center justify-center"
                    >
                        <div className="text-lg font-light tracking-tight uppercase">
                            What I have learnt so far
                        </div>
                        <div className="text-section-title-mobile md:text-section-title-md font-bold tracking-tight">
                            Experience
                        </div>
                    </motion.div>
                    <VerticalTimeline>
                        {Experiences.map((experience, index) => {
                            return (
                                <ExperienceCard
                                    key={`experience-${index}`}
                                    experience={experience}
                                />
                            );
                        })}
                    </VerticalTimeline>
                </div>
                <LanguagesAndTechnologies />
            </div>
        </section>
    );
};

export default about;
