"use client";

import React from "react";
import Carousel from "../components/CarouselSlider";
import CategoryList from "../container/category/CategoryList";
import Category from "../container/category/Category";
import Pagination from "../components/Pagination";

export default function HomePage() {
    const images = [
        "/images/banner1.webp",
        "/images/banner2.webp",
    ];

    return (
        <>
            {/* Carousel Section */}
            <div className="w-full h-[70vh] flex justify-center">
                <Carousel images={images} />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto">
                {/* Category List Section */}
                <div className="w-full flex flex-col items-center justify-start">
                    <CategoryList />
                </div>

                {/* Category Section */}
                <div className="w-full flex flex-col items-center justify-start">
                    <Category />
                </div>

                {/* Pagination Section */}
                <div className="w-full flex flex-col items-center justify-start">
                    <Pagination />
                </div>
            </div>
        </>
    );
}
