"use client";

import React, { useState } from "react";
import Cart from "../container/cart/Cart";

export default function CartPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
      <Cart />
    </div>
  );
}
