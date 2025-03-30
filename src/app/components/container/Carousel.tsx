"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";

const fetchImages = async () => {
    return [
        "/images/banner1.webp",
        "/images/banner2.webp",
    ];
};

export default function CarouselSlider() {
    const { data: images = [], isLoading, error } = useQuery({
        queryKey: ["carouselImages"],
        queryFn: fetchImages,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading images</p>;

    return (
        <div className="slider" style={{ "--width": "300px", "--height": "200px", "--quantity": images.length } as React.CSSProperties}>
            <div className="list">
                {images.map((img, index) => (
                    <Card
                        key={index}
                        className="item"
                        style={{ "--position": index + 1 } as React.CSSProperties}
                    >
                        <CardContent className="p-0">
                            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
