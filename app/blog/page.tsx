import BlogPage from "$component@BlogPage";
import { getBlogs } from "$lib@blogs";

const page = async () => {
    let blogs = await getBlogs();
    return <BlogPage blogs={blogs} />;
};

export default page;
