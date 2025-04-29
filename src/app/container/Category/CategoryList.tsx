import React from "react";

const categories = [
    { name: "Thực phẩm", image: "/images/thucpham.jfif" },
    { name: "Rau củ", image: "/images/raucu.jfif" },
    { name: "Hải sản", image: "/images/haisan.jfif" },
    { name: "Thực phẩm khác", image: "/images/thucphamkhac.jfif" },
];

export default function CategoryList() {
    return (
        <div className="cursor-pointer flex justify-center gap-6 py-6">
            {categories.map((category, index) => (
                <div key={index} className="text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-300 hover:scale-110 transition-transform duration-300">
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-2 text-sm md:text-base font-medium">{category.name}</p>
                </div>
            ))}
        </div>
    );
}
