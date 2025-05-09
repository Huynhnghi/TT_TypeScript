"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/app/container/category/products";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faRegStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetailPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState(products.comments || []);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0); 

  const id = Number(params?.id);
  if (isNaN(id)) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500 font-semibold">Sản phẩm không tồn tại.</p>
      </div>
    );
  }

  const product = products.find((item) => item.id === id);
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500 font-semibold">Sản phẩm không tồn tại.</p>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { customer: name, rating, comment: text };
    setComments([...comments, newComment]);
    setName("");
    setText("");
    setRating(0); // Reset rating after submitting
  };

  const handleStarClick = (starRating) => {
    setRating(starRating); // Set rating when a star is clicked
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-6 rounded shadow flex flex-col md:flex-row gap-2 md:gap-4">
        {/* Hình ảnh sản phẩm */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 max-w-md rounded ml-auto object-cover"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Chi tiết sản phẩm: {product.name}</h1>
          <p className="text-gray-700 mb-2">Tên sản phẩm: {product.name}</p>
          <p className="text-red-500 font-semibold mb-2">Giá: {product.price}</p>
          <p className="text-gray-600 mb-4">{product.sold ? `${product.sold} đã bán` : "Chưa có lượt mua"}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-700">Số lượng:</span>
            <Button
              onClick={decreaseQuantity}
              aria-label="Giảm số lượng"
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-black-700"
            >
              -
            </Button>
            <span className="min-w-[24px] text-center">{quantity}</span>
            <Button
              onClick={increaseQuantity}
              aria-label="Tăng số lượng"
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-black-700"
            >
              +
            </Button>
          </div>

          <Button className="mt-2 px-4 py-2 bg-teal-600 text-white rounded hover:bg-orange-600 cursor-pointer">
            Mua ngay
          </Button>
        </div>
      </div>

      {/* Mô tả sản phẩm */}
      <div className="bg-gray-100 p-10 rounded shadow flex flex-col md:flex-row gap-2 md:gap-4">
        <p className="text-gray-700 mb-2">{product.description}</p>
      </div>
      
      {/* Đánh giá và bình luận */}
      <div className="bg-gray-100 p-6 rounded shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Đánh giá</h2>

        {/* Hiển thị số sao đánh giá */}
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
                    {/* Hiển thị sao cho mỗi bình luận */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {i < comment.rating ? (
                          <FontAwesomeIcon icon={faStar} />
                        ) : i === comment.rating && comment.rating % 1 !== 0 ? (
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

        {/* Form nhập bình luận */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          {/* Clickable stars for rating */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-700">Đánh giá:</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => handleStarClick(i + 1)}
                >
                  <FontAwesomeIcon icon={faStar} size={24} />
                </span>
              ))}
            </div>
          </div>

          {/* Textarea for comment */}
          <textarea
            placeholder="Viết bình luận..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Gửi bình luận
          </button>
        </form>
      </div>
    </div>
  );
}
