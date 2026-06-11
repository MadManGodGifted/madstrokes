import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
    title: "Mad Strokes Blog — Stories & Reflections",
    description: "Deep dives into Indian art history, artist interviews, and the personal creative journey of Mad Strokes.",
};

export default function BlogPage() {
    return <BlogClientPage />;
}
