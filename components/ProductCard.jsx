"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "@/app/constant";
import { useRouter } from "next/navigation";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ProductCard = () => {
  const [productList, setProductList] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      setProductList(products);
    } else {
      console.error("products is not an array or is empty:", products);
    }
  }, []);

  if (productList.length === 0) {
    return <p className="text-center text-lg font-semibold">No products available</p>;
  }

  return (
    <div className="px-2 py-10 w-full mx-auto overflow-hidden">
      <h3 className="text-center text-[40px] font-bold mb-6">Shop Our Trending Items</h3>
      
      <div className="w-full flex justify-center">
        <Slider {...settings} className="w-full">
          {productList.map((product) => (
            <div key={product.id} className="px-3">
              <div 
                className="bg-white border-2 rounded-xl shadow-lg w-80 h-[450px] overflow-hidden p-4 transition-transform transform hover:scale-105 flex flex-col justify-between cursor-pointer"
                onClick={() => router.push(`/productdetails/${product.id}`)} 
              >
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <h3 className="font-semibold text-lg mt-1">{product.title}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(Math.round(product.rating))].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-1">{product.oldPrice}</span>
                    )}
                    <span className="text-lg font-bold">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCard;
