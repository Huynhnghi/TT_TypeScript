"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";

const parsePrice = (priceStr: string): number => {
  const numStr = priceStr.replace(/[^\d]/g, "");
  return parseInt(numStr, 10);
};

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
};

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + parsePrice(item.product.price) * item.quantity;
  }, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛒 Giỏ hàng của bạn</h2>
      {cartItems.length === 0 && <p>Giỏ hàng đang trống.</p>}

      {cartItems.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="flex items-center justify-between mb-4 border-b pb-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover mr-4"
          />
          <div className="flex-1">
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-red-500">Giá: {product.price}</p>
            <div className="flex items-center mt-2">
              <button
                className="px-2 py-1 bg-gray-200"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <strong>{formatPrice(parsePrice(product.price) * quantity)}</strong>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <h3 className="text-lg font-bold mt-6">
          Tổng tiền: {formatPrice(totalPrice)}
        </h3>
      )}
    </div>
  );
};

export default Cart;
