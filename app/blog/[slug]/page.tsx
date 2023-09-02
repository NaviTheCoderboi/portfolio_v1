import Blog from "$component@Blog";
import { getBlogs, getBlog } from "$lib/blogs";
import covers from "$content/assets";

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

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    let blog = await getBlog(params.slug);
    // @ts-ignore
    let blogMeta: any = blog.frontmatter;
    const metadata = meta;
    if (!blog) {
        metadata.title = "404";
        metadata.openGraph.title = "404";
        metadata.description = "Page not found";
        metadata.openGraph.description = "Page not found";
        return metadata;
    }
    meta.title = blogMeta.title;
    meta.openGraph.title = blogMeta.title;
    meta.description = blogMeta.description;
    meta.openGraph.description = blogMeta.description;
    // @ts-ignore
    meta.openGraph.images = covers[blogMeta.img_path];
    return metadata;
}

export async function generateStaticParams() {
    let blogs = await getBlogs();

    return blogs.map((blog) => ({
        slug: blog.frontmatter.slug,
    }));
}

const page = async ({ params }: { params: { slug: string } }) => {
    let blog = await getBlog(params.slug);
    return <Blog blog={blog} />;
};

export default page;
