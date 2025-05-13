"use client";

import React from "react";
import Carousel from "./components/CarouselSlider";
import CategoryList from "./container/category/CategoryList";
import Category from "./container/category/Category";
import { useState } from "react";
//import { PaginationComponent } from "../components/Pagination";

export default function HomePage() {
    const images = [
        "/images/banner1.webp",
        "/images/banner2.webp",
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <>
          {/* Carousel Section */}
            <div className="w-full h-[70vh] flex justify-center">
                <Carousel images={images} />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto">

                {/* Category Section */}
                <div className="w-full flex flex-col items-center justify-start">
                    <Category />
                </div>
                
            </div>
        </>
    );
}
