import React from "react";
import MainSection from "$component@sections/main";
import About from "$component@sections/about";
import Projects from "$component@sections/projects";
import ShowCaseProjects from "$lib/constants/showcase_projects.json";

const page = () => {
    return (
        <div className="relative h-screen">
            <MainSection />
            <About />
            <Projects projects={ShowCaseProjects.projects} />
        </div>
    );
};

export default page;
