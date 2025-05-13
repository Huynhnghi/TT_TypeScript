import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

interface Props {
  currentProductId: number;
  currentCategory: string;
  products: Product[];
}

const RelatedProducts: React.FC<Props> = ({
  currentProductId,
  currentCategory,
  products,
}) => {
  const related = products.filter(
    (p) => p.category === currentCategory && p.id !== currentProductId
  );

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
      <div className="flex overflow-x-auto gap-6 pb-4">
        {related.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] bg-white border border-gray-300 rounded-xl shadow-md p-4 flex-shrink-0 transition-transform transform hover:scale-97 hover:shadow-xl hover:border-teal-500"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="font-semibold text-lg text-center mb-1">
              {product.name}
            </p>
            <p className="text-center text-md text-green-600 mb-3">
              {product.price}
            </p>
            <Link href={`/container/product/${product.id}`}>
            <Button className="w-full bg-teal-600 text-white text-base rounded hover:bg-orange-600">
              Xem thêm
            </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
