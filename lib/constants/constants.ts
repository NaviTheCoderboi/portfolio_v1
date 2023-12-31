import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Icons, ProjectPosters } from "$public";

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

interface ExperiencesType {
    title: string;
    year: string;
    icon: any;
    description: string;
}

export const Experiences: ExperiencesType[] = [
    {
        title: "Python Developer",
        year: "2021 - June",
        icon: Icons.python,
        description:
            "I started my coding journey with python when i was in 8th grade and I still love it. I have made many projects with python and I am still learning it. I started learning it from YouTube channel named CodeWithHarry and i got interested in coding.",
    },
    {
        title: "Html and css",
        year: "2022 - January",
        icon: Icons.html,
        description:
            "When i completed my python learning, i came to know about bootstrap which attracted me to web development and i thought of learning it. I again preferred CodeWithHarry and learnt html and css from there. I made many projects with html and css but i wasn't knowing javascript yet.",
    },
    {
        title: "Backend Developer",
        year: "2022 - April",
        icon: Icons.javascript,
        description:
            "After learning Html and Css , i went on to learn javascript and made many projects using it and thought of learning its closest thing: Nodejs and made projects using it and also learnt dbs such as mongodb and postgres along with it.",
    },
    {
        title: "Frontend frameworks",
        year: "2022 - November",
        icon: Icons.react,
        description:
            "Then came the frontend framework: React into my vision and i went to learn it. After learning its core concepts i learnt NextJs. I also learnt tailwindcss and made many projects with it.",
    },
    {
        title: "Typescript",
        year: "2023 - February",
        icon: Icons.typescript,
        description:
            "I was going well with javascript was missing a taste of type annotations , so i came to know about typescript and learnt it. I got sticked to it and made many projects such as ExpressApi and used it in my frontend projects",
    },
    {
        title: "Rust",
        year: "2023 - August - present",
        icon: Icons.rust,
        description:
            "I listened about a lot of pros of rust and its speed, so i wen tto learn rust and i am still learning it.",
    },
];

interface ProjectsType {
    title: string;
    description: string;
    image: any;
    link: string;
    delay: number;
    github: string;
}

export const Projects: ProjectsType[] = [
    {
        title: "NewsDash",
        description:
            "NewsDash is a fast and reliable Python wrapper for the News API that simplifies accessing the latest news articles from around the world. 📰",
        image: ProjectPosters.NewsDash,
        link: "https://navithecoderboi.github.io/NewsDash/",
        delay: 0.2,
        github: "https://github.com/NaviTheCoderboi/NewsDash",
    },
    {
        title: "Portfolio site",
        description:
            "My portfolio site made using NextJS with TailwindCSS, ThreeJS and typescript. Don't forget to check it out.",
        image: ProjectPosters.Portfolio,
        link: "https://navithecoderboi.vercel.app/",
        delay: 0.4,
        github: "https://github.com/NaviTheCoderboi/portfolio",
    },
    {
        title: "ByteChat",
        description:
            "ByteChat is a mixup of discord and stackoverflow where developers meet and chat, ask questions and answer them.",
        image: ProjectPosters.ByteChat,
        link: "https://github.com/Devaunch/ByteChat",
        delay: 0.6,
        github: "https://github.com/Devaunch/ByteChat",
    },
];
