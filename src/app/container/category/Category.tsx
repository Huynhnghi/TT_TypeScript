"use client";

import React, { useState, useEffect } from "react";
import { products } from "../category/products";
import Link from "next/link";
import { PaginationComponent } from "@/app/components/Pagination";
import { Button } from "@/components/ui/button";
import CategoryList from "./CategoryList";
import { useCart } from "@/app/context/CartContext";  // 👈 Dùng hook thay vì Provider
import { useRouter } from "next/navigation";

export default function CategoryProductPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const PRODUCTS_PER_PAGE = 8;

  const { addToCart } = useCart();  // 👈 Dùng custom hook lấy context
  const router = useRouter();

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());

      if (selectedCategory) {
        return matchesQuery && product.category === selectedCategory;
      }
      return matchesQuery;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [query, selectedCategory]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const keyword = query.trim().toLowerCase();
      const exactFiltered = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase() === keyword ||
          product.category.toLowerCase() === keyword
      );
      setFilteredProducts(exactFiltered);
      setCurrentPage(1);
    }
  };

  const productsToShow = filteredProducts;
  const paginatedProducts = productsToShow.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleBuyNow = (product: any) => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <CategoryList onSelectCategory={(category) => setSelectedCategory(category)} />

      <div className="p-4 bg-white shadow flex items-center justify-between flex-col sm:flex-row gap-4">
        <h2 className="text-xl font-bold">Tìm kiếm sản phẩm</h2>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm hoặc danh mục..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border px-3 py-2 rounded w-full max-w-md"
        />
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded overflow-hidden shadow-sm group transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-all duration-300"
                />
                <div className="p-3 bg-white group-hover:bg-teal-100 transition-all duration-300">
                  <h4 className="font-bold group-hover:text-teal-600 transition-all duration-300">
                    {product.name}
                  </h4>
                  <p className="text-red-500 group-hover:text-teal-500 transition-all duration-300">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-all duration-300">
                    {product.sold} đã mua
                  </p>
                  <div className="flex gap-2 mt-2 justify-between">
                    <Link href={`/container/product/${product.id}`}>
                      <Button className="bg-teal-500 hover:bg-orange-600 hover:text-white text-white border border-dashed cursor-pointer transition-all duration-200">
                        Xem thêm
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleBuyNow(product)}
                      className="bg-teal-500 hover:bg-orange-600 hover:text-white text-white border border-dashed cursor-pointer transition-all duration-200"
                    >
                      Mua ngay
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center min-h-[200px] w-full">
              <p className="text-gray-500 text-center text-lg font-medium">
                Không có sản phẩm nào trong danh mục này.
              </p>
            </div>
          )}
        </div>

        {paginatedProducts.length > 0 && (
          <div className="mt-6">
            <PaginationComponent
              totalItems={productsToShow.length}
              itemsPerPage={PRODUCTS_PER_PAGE}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
