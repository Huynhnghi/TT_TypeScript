"use client";

import React from "react";
import Carousel from "../components/container/Carousel";

export default function HomePage() {
    const images = [
        "/images/banner1.webp",
        "/images/banner2.webp",
    ];

    return (
        <section className="h-screen flex items-start justify-center pt-4">
            <br />
            <Carousel />
        </section>

    );
}
