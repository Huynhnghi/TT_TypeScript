import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
    { name: "Thực phẩm", image: "/images/thucpham.jfif", price: "120.000đ", sold: "1.2k" },
    { name: "Rau củ", image: "/images/raucu.jfif", price: "80.000đ", sold: "850" },
    { name: "Hải sản", image: "/images/haisan.jfif", price: "250.000đ", sold: "500" },
    { name: "Thực phẩm khác", image: "/images/thucphamkhac.jfif", price: "90.000đ", sold: "650" },
    { name: "Thực phẩm", image: "/images/thucpham.jfif", price: "120.000đ", sold: "1.2k" },
    { name: "Rau củ", image: "/images/raucu.jfif", price: "80.000đ", sold: "850" },
    { name: "Hải sản", image: "/images/haisan.jfif", price: "250.000đ", sold: "500" },
    { name: "Thực phẩm khác", image: "/images/thucphamkhac.jfif", price: "90.000đ", sold: "650" }
];

export default function CategoryList() {
    const [query, setQuery] = useState<string>("");
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    return (
        <div>
            {/* Thanh Menu + Ô tìm kiếm */}
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <h2 className="text-2xl font-bold">Danh mục sản phẩm</h2>

                {/* Ô tìm kiếm trên thanh menu */}
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Tìm kiếm danh mục..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    
                    {/* Kết quả tìm kiếm xuất hiện bên dưới input */}
                    {query && filteredCategories.length > 0 && (
                        <ul className="absolute bg-white border mt-1 w-full rounded-lg shadow-lg z-10">
                            {filteredCategories.map((category, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => setQuery(category.name)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </header>

            {/* Danh sách danh mục */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                        <div key={index} className="relative duration-500 hover:scale-105 group">
                            <img
                                alt={category.name}
                                src={category.image}
                                className="w-full h-[300px] object-cover rounded-lg mb-4 transition-all ease-in-out group-hover:opacity-80"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 rounded-b-lg">
                                <h3 className="text-white text-lg font-bold">{category.name}</h3>
                                <p className="text-red-500 font-bold">{category.price}</p>
                                <p className="text-gray-300 text-sm">{category.sold} đã mua</p>
                                <div className="flex justify-between mt-4">
                                <Button
                                    variant="outline"
                                    className="bg-[#00BFA6] text-white uppercase tracking-[2px] cursor-pointer rounded-[10px] border-2 border-dashed border-[#00BFA6] px-[15px] py-[4px] shadow-md hover:bg-white hover:text-[#00BFA6] active:bg-[#87dbd0] transition duration-400"
                                >
                                    Xem thêm
                                </Button>

                                <Button
                                    variant="outline"
                                    className="bg-[#00BFA6] text-white uppercase tracking-[2px] cursor-pointer rounded-[10px] border-2 border-dashed border-[#00BFA6] px-[15px] py-[4px] shadow-md hover:bg-white hover:text-[#00BFA6] active:bg-[#87dbd0] transition duration-400"
                                    >
                                    Mua ngay
                                </Button>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-4">Không tìm thấy sản phẩm</p>
                )}
            </div>
        </div>
    );
}
