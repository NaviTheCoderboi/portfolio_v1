"use client";
import React from "react";
import Image from "next/image";
import { Logo } from "$public";
import { NavItems } from "$lib/constants/constants";
import Link from "next/link";

const Navbar = () => {
    const handleScroll = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        let href = event.currentTarget.href;
        let targetId = href.replace(/.*\#/, "");
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="z-50 fixed top-0 px-10 py-6 flex justify-around items-center backdrop-filter backdrop-blur-sm h-auto w-full">
            <Link href="/">
                <Image src={Logo} alt="logo" width={80} height={80} />
            </Link>
            <div className="flex items-center justify-center gap-8">
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
        </nav>
    );
};

export default Navbar;
