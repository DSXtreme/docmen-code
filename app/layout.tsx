import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";

// Layout
import Layout from "../components/Layout";

const montsarrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico",
    },
    title: "Docmen Code - AI Code Documentation Generator",
    description:
        "Generate high-quality documentation for your code using AI with Docmen Code.",
    keywords: [
        "AI",
        "code documentation",
        "documentation generator",
        "Markdown",
        "developer tools",
        "Docmen Code",
    ],
    openGraph: {
        title: "Docmen Code - AI Code Documentation Generator",
        description:
            "Automatically generate clear and structured documentation for your code with Docmen Code.",
        url: "https://code-document-front.vercel.app/",
        type: "website",
        images: [
            {
                url: "/logo_d_code.png",
                width: 800,
                height: 600,
                alt: "Docmen Code - AI Code Documentation Generator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Docmen Code - AI Code Documentation Generator",
        description:
            "Create detailed documentation for your code effortlessly with Docmen Code using AI.",
        images: "https://your-app-url.com/twitter-image.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={montsarrat.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
