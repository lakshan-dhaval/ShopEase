"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import { FaShoppingCart, FaHeart, FaBalanceScale } from "react-icons/fa";
import { products } from "@/app/constant"; 

export default function ProductDetails() {
  const { id } = useParams(); // ✅ Fetch dynamic ID from URL
  const [product, setProduct] = useState(null);

  console.log("🚀 Received ID from useParams:", id); // 🔍 Debugging

  useEffect(() => {
    if (id) {
      const productId = parseInt(id); // ✅ Ensure it's a number
      const foundProduct = products.find((item) => item.id === productId);

      if (!foundProduct) {
        console.error("❌ Product not found for ID:", productId);
      }
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-lg font-semibold text-red-500">Product not found</p>;
  }

  return (
    <div className="flex gap-8 p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div>
          <img className="border-2 w-[539px] h-[539px] object-cover" src={product.image} alt={product.title} />
        </div>
        <div className="flex justify-evenly">
          <img className="border-2 w-[120px] h-[120px] object-cover" src={product.image} alt={product.title} />
          <img className="border-2 w-[120px] h-[120px] object-cover" src={product.image} alt={product.title} />
        </div>
      </div>

      <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">SALE</span>
        <h2 className="text-2xl font-semibold mt-2">{product.title}</h2>
        <p className="text-yellow-500 mt-1">★★★★★ (5 customer reviews)</p>
        <p className="text-gray-600 text-sm mt-2">14 people are viewing this product right now</p>
        <p className="text-gray-500 mt-2">{product.description || "No description available."}</p>

        <div className="flex items-center mt-4">
          {product.oldPrice && <span className="text-gray-400 line-through text-lg mr-2">{product.oldPrice}</span>}
          <span className="text-blue-600 text-2xl font-semibold">{product.price}</span>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
