import React from "react";
import MainSection from "$component@sections/main";
import About from "$component@sections/about";
import Projects from "$component@sections/projects";

const page = () => {
    return (
        <div className="relative h-screen">
            <MainSection />
            <About />
            <Projects />
        </div>
    );
};

export default page;
