import React from "react";
import { LanguagesAndTechnologies } from "$lib/constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const LanguageAndTechnology = ({
    LAT,
}: {
    LAT: { name: string; image: any };
}) => {
    return (
        <Tilt className="flex justify-center items-center p-4 rounded-full border-blue-500 border-2 cursor-pointer hover:bg-gradient-to-bl from-slate-700 via-transparent to-violet-950">
            <div className="hidden md:block">
                <Image src={LAT.image} width={90} height={90} alt={LAT.name} />
            </div>
            <div className="md:hidden">
                <Image
                    src={LAT.image}
                    width={50}
                    height={50}
                    alt={LAT.name}
                    loading="lazy"
                />
            </div>
        </Tilt>
    );
};

const languagesAndTechnologies = () => {
    return (
        <div className="flex flex-col justify-center gap-5">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 items-center justify-center"
            >
                <div className="text-lg font-light tracking-tight uppercase">
                    Technologies I am familiar with
                </div>
                <div className="text-section-title-mobile md:text-section-title-md font-bold tracking-tight">
                    Technologies
                </div>
            </motion.div>
            <div className="flex flex-row justify-center items-center flex-wrap gap-10 p-10">
                {LanguagesAndTechnologies.map((LAT) => {
                    return (
                        <motion.div
                            key={LAT.name}
                            initial={{ scale: 0.1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: LAT.delay }}
                            viewport={{ once: true }}
                        >
                            <LanguageAndTechnology LAT={LAT} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default languagesAndTechnologies;
