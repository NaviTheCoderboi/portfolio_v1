import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "$component@Navbar";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NaviTheCoderboi | Portfolio",
    description:
        "Hello! I'm NaviTheCoderboi, a developer from India. Welcome to my portfolio! you can read about me here and my blogs too.",
    metadataBase: new URL(String(process.env.BASE_URL)),
    referrer: "origin-when-cross-origin",
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body
                className={`${poppins.className} text-white`}
                style={{ backgroundColor: "rgb(10, 25, 47)" }}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
