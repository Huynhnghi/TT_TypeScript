import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface CommentModalProps {
  name: string;
  text: string;
  rating: number;
  onNameChange: (value: string) => void;
  onTextChange: (value: string) => void;
  onRatingChange: (value: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CommentModal({
  name = "",
  text = "",
  rating = 0,
  onNameChange,
  onTextChange,
  onRatingChange,
  onSubmit,
}: CommentModalProps) {
  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Tên của bạn"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-700">Đánh giá:</span>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
              onClick={() => onRatingChange(i + 1)}
            >
              <FontAwesomeIcon icon={faStar} size="lg" />
            </span>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Viết bình luận..."
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
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
  );
}
