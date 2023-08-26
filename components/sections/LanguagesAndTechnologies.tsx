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
            <div>
                <Image src={LAT.image} width={90} height={90} alt={LAT.name} />
            </div>
        </Tilt>
    );
};

const languagesAndTechnologies = () => {
    return (
        <div className="flex flex-col justify-center gap-5">
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
            >
                <div className="text-xl font-light tracking-tight text-center uppercase">
                    my experience of
                </div>
                <div className="text-[4rem] font-bold tracking-tight text-center">
                    Languages and Technologies
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
