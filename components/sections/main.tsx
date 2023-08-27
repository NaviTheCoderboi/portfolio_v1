"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeCanvas from "$lib/canvas/homeCanvas";

const MobileSection = () => {
    return (
        <section className="flex md:hidden flex-col justify-center items-center h-screen w-full">
            <div className="flex items-center h-2/5 justify-center gap-5 w-4/5">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-violet-500"></div>
                    <motion.div
                        className="h-full w-2 bg-gradient-to-b from-violet-500 to-transparent"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                </div>
                <div className="flex flex-col gap-5 h-auto justify-start">
                    <motion.div
                        className="flex items-center gap-3 h-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-title-mobile font-bold tracking-tight">
                            Hi, I'm
                        </div>
                        <div
                            className="text-title-mobile font-bold tracking-tight"
                            id="mainText"
                        >
                            Navinder
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-lg tracking-tight font-medium text-blue-300"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        I'm a high school student from India dreaming to be a
                        doctor.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const main = () => {
    return (
        <div id="home">
            <div className="absolute left-0 top-0 z-[-1] h-screen w-full">
                <HomeCanvas />
            </div>
            <MobileSection />
            <section className="hidden md:flex flex-col justify-center items-center h-screen">
                <div className="flex items-center justify-center h-2/5 gap-5">
                    <div className="h-full flex flex-col items-center justify-center">
                        <div className="h-5 w-5 rounded-full bg-violet-500"></div>
                        <motion.div
                            className="h-full w-2 bg-gradient-to-b from-violet-500 to-transparent"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1 }}
                        ></motion.div>
                    </div>
                    <div className="h-full">
                        <motion.div
                            className="flex gap-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-title-md font-extrabold tracking-tight">
                                Hi, I'm
                            </div>
                            <div
                                className="text-title-md font-extrabold tracking-tight text-blue-500"
                                id="mainText"
                            >
                                Navinder
                            </div>
                        </motion.div>
                        <motion.div
                            className="text-2xl tracking-tight font-medium text-blue-300"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            I'm a high school student from India dreaming to be
                            a doctor.
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default main;
