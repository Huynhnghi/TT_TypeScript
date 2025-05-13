"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/app/container/category/products";
import RelatedProducts from "@/app/components/RelatedCategories";
import CommentModal from "@/app/components/CommentModal"; 
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faRegStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState(product?.comments || []);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  if (isNaN(id) || !product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500 font-semibold">Sản phẩm không tồn tại.</p>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = { customer: name, rating, comment: text };
    setComments([...comments, newComment]);
    setName("");
    setText("");
    setRating(0);
  };
  const handleAddComment = (comment: { customer: string; rating: number; comment: string }) => {
    setComments([...comments, comment]);
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-5 text-lg">
        {/* Cột trái - Hình ảnh */}
        <div className="md:w-1/2 w-full flex">
          <div className="p-3 w-full h-full rounded-lg border border-gray-300 shadow-md bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 max-w-md rounded object-cover mx-auto"
            />
          </div>
        </div>

        {/* Cột phải - Thông tin */}
        <div className="md:w-1/2 w-full flex">
          <div className="p-3 w-full h-full rounded-lg border border-gray-300 shadow-md bg-gray-100 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-4">Chi tiết sản phẩm: {product.name}</h1>
              <p className="text-lg text-gray-700 mb-2">Tên sản phẩm: {product.name}</p>
              <p className="text-lg text-red-500 font-semibold mb-2">Giá: {product.price}</p>
              <p className="text-base text-gray-600 mb-4">
                {product.sold ? `${product.sold} đã bán` : "Chưa có lượt mua"}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg text-gray-700">Số lượng:</span>
                <Button onClick={decreaseQuantity}>-</Button>
                <span className="min-w-[24px] text-center">{quantity}</span>
                <Button onClick={increaseQuantity}>+</Button>
              </div>
            </div>
            <Button className="mt-2 bg-teal-600 hover:bg-orange-600">Thêm giỏ hàng</Button>
            <Button className="mt-2 bg-teal-600 hover:bg-orange-600">Mua ngay</Button>
          </div>
        </div>
      </div>

      {/* Mô tả sản phẩm */}
      <div className="bg-gray-100 p-10 rounded shadow flex flex-col gap-4 mt-4">
        <h1 className="text-2xl font-bold">Mô tả sản phẩm</h1>
        <p className="text-gray-700 text-lg">{product.description}</p>
      </div>

      {/* Đánh giá và bình luận */}
      <div className="bg-gray-100 p-6 rounded shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Đánh giá</h2>
        {product.rating ? (
          <p className="text-yellow-500 mb-2">{product.rating} ⭐</p>
        ) : (
          <p className="text-gray-500 mb-2">Chưa có đánh giá</p>
        )}

        {/* Danh sách bình luận */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Bình luận</h3>
          {comments.length > 0 ? (
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="bg-white p-3 rounded shadow text-sm">
                  <p className="font-semibold text-gray-700">{comment.customer}</p>
                  <div className="text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < Math.floor(comment.rating) ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : i === Math.floor(comment.rating) && comment.rating % 1 !== 0 ? (
                          <FontAwesomeIcon icon={faStarHalfAlt} />
                        ) : (
                          <FontAwesomeIcon icon={faRegStar} />
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{comment.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Chưa có bình luận nào.</p>
          )}
        </div>

        <CommentModal
          onSubmit={handleAddComment}
        />

      </div>

      {/* Sản phẩm liên quan */}
      <RelatedProducts
        currentProductId={product.id}
        currentCategory={product.category}
        products={products}
      />
    </div>
  );
}
