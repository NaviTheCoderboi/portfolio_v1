import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Icons } from "$public";

interface NavItemsType {
    name: string;
    href: string;
}

export const NavItems: NavItemsType[] = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Blog",
        href: "#blog",
    },
];

interface SocialsType {
    name: string;
    href: string;
    image: any;
    delay: number;
}

export const Socials: SocialsType[] = [
    {
        name: "Github",
        href: "https://github.com/NaviTheCoderboi",
        image: AiFillGithub,
        delay: 0.2,
    },
    {
        name: "Discord",
        href: "https://discord.gg/2CBjfcS8En",
        image: BsDiscord,
        delay: 0.4,
    },
    {
        name: "Gmail",
        href: "mailto:navindersingh568@gmail.com",
        image: AiOutlineMail,
        delay: 0.6,
    },
];

interface LanguagesAndTechnologiesType {
    name: string;
    image: any;
    delay: number;
}

export const LanguagesAndTechnologies: LanguagesAndTechnologiesType[] = [
    { image: Icons.css, name: "Css", delay: 0.2 },
    { image: Icons.docker, name: "Docker", delay: 0.3 },
    { image: Icons.git, name: "Git", delay: 0.4 },
    { image: Icons.html, name: "Html", delay: 0.5 },
    { image: Icons.javascript, name: "Javascript", delay: 0.6 },
    { image: Icons.mongodb, name: "MongoDB", delay: 0.7 },
    { image: Icons.nextjs, name: "NextJs", delay: 0.8 },
    { image: Icons.pg, name: "PostgreSQL", delay: 0.9 },
    { image: Icons.python, name: "Python", delay: 1 },
    { image: Icons.react, name: "React", delay: 1.1 },
    { image: Icons.typescript, name: "Typescript", delay: 1.2 },
    { image: Icons.ubuntu, name: "Ubuntu", delay: 1.3 },
];
