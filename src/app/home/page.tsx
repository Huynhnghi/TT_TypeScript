"use client";

import React from "react";
import Carousel from "../components/CarouselSlider";
import CategoryList from "../container/Category/CategoryList";
import Category from "../container/Category/Category";
import Pagination from "../components/pagination";
export default function HomePage() {
    const images = [
        "/images/banner1.webp",
        "/images/banner2.webp",
    ];

    return (
        <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto">
            {/* Carousel Section */}
            <div className="w-full h-[70vh] flex justify-center">
                <Carousel images={images} />
            </div>

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
                <Pagination/>
            </div>
        </div>
    );
}
