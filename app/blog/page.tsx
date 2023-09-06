import BlogPage from "$component@BlogPage";
import { getBlogs } from "$lib@blogs";

const meta = {
    title: "NaviTheCoderboi | Portfolio",
    description:
        "Hello! I'm NaviTheCoderboi, a developer from India. Welcome to my portfolio! you can read about me here and my blogs too.",
    metadataBase: new URL(String(process.env.BASE_URL)),
    authors: [{ name: "NaviTheCoderboi" }],
    keywords: [
        "NaviTheCoderboi",
        "portfolio",
        "blog",
        "blog-portfolio",
        "student",
        "Developer",
    ],
    robots: {
        follow: true,
        index: false,
        nocache: true,
    },
    openGraph: {
        title: "NaviTheCoderboi | Portfolio",
        description:
            "Hello! I'm NaviTheCoderboi, a developer from India. Welcome to my portfolio! you can read about me here and my blogs too.",
        images: "/assets/logo.png",
        type: "website",
    },
    twitter: {
        title: "NaviTheCoderboi | Portfolio",
        description:
            "Hello! I'm NaviTheCoderboi, a developer from India. Welcome to my portfolio! you can read about me here and my blogs too.",
        images: "/assets/logo.png",
        creator: "@NaviTheCoderboi",
    },
    themeColor: "#3B82F6",
};

export async function generateMetadata() {
    const metadata = meta;
    meta.title = "NaviTheCoderboi | blog";
    meta.openGraph.title = "NaviTheCoderboi | blog";
    meta.twitter.title = "NaviTheCoderboi | blog";
    return metadata;
}

const page = async () => {
    let blogs = await getBlogs();
    return <BlogPage blogs={blogs} />;
};

export default page;
