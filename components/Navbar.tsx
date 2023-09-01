"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "$public";
import { NavItems } from "$lib@constants/constants";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const handleScroll = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        if (event.currentTarget.href.replace(/.*\#/, "") == "blog") {
            router.push("/blog");
        } else {
            if (pathname == "/blog") {
                router.push(
                    "/#" + event.currentTarget.href.replace(/.*\#/, "")
                );
            }
        }
        let href = event.currentTarget.href;
        let targetId = href.replace(/.*\#/, "");
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const [open, setOpen] = useState(false);
    const handleCloseAndHref = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        setOpen(false);
        handleScroll(event);
    };
    return (
        <nav className="z-50 fixed top-0 px-10 py-6 flex justify-around items-center backdrop-filter backdrop-blur-sm h-auto w-full">
            <Link href="/" className="grow md:grow-0">
                <Image src={Logo} alt="logo" height={70} width={70} />
            </Link>
            <div className="hidden md:flex items-center justify-center gap-8">
                {NavItems.map((item) => {
                    return (
                        <Link
                            className="text-[1.4rem] font-light hover:text-blue-500 duration-500 cursor-pointer"
                            key={item.name}
                            scroll={true}
                            onClick={handleScroll}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
            <button
                className="grid place-items-center md:hidden text-5xl"
                onClick={() => setOpen(!open)}
            >
                <FaHamburger />
            </button>
            <AnimatePresence>
                {open && (
                    <div className="fixed md:hidden top-0 right-0 w-full h-[200vh] bg-black bg-opacity-50 flex flex-col items-end">
                        <motion.div
                            initial={{ x: 500 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ x: 500 }}
                            className="w-2/3 h-full overflow-y-hidden bg-slate-900 flex flex-col items-center px-4 py-16 relative gap-8"
                        >
                            <div className="absolute top-5 right-5 text-3xl">
                                <RxCross1 onClick={() => setOpen(!open)} />
                            </div>
                            <div className="flex flex-col gap-12 items-center justify-center py-8">
                                {NavItems.map((navItem) => {
                                    return (
                                        <Link
                                            href={navItem.href}
                                            key={navItem.name}
                                            onClick={handleCloseAndHref}
                                        >
                                            <div className="font-semibold text-3xl">
                                                {navItem.name}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
