import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
    params: Promise<{ id: string }> | { id: string };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.id === resolvedParams.id);
    
    if (!post) {
        return {
            title: "Post Not Found | Mad Strokes",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: `${post.title} | Mad Strokes Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.id === resolvedParams.id);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
