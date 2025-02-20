"use client";
import dynamic from "next/dynamic";
import { popularArticles } from "@/app/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ArticlesControllers from "./ui/ArticlesControllers";
import { useRouter } from "next/navigation";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PopularArticles = () => {
  const [openArticleIndex, setOpenArticleIndex] = useState(null);
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 py-6 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings} className="w-full">
        {popularArticles.map((item, index) => (
          <div key={item.id || index} className="relative p-2">
            <div className="absolute top-2 m-3 left-2 bg-white text-black rounded-full px-3 py-1 text-sm font-bold shadow-md">
              <span className="block text-lg">{item.date}</span>
              <span className="block text-xs">{item.month}</span>
            </div>

            <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title || "Popular Article"}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <span className="absolute bottom-24 left-2 bg-black text-white px-3 py-1 text-xs rounded-md">
              {item.category}
            </span>

            <div className="px-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <a
                onClick={() => router.push(`/articlesContainer/${item.id}`)}
                href={item.link}
                className="text-blue-500 hover:underline text-sm"
              >
                Continue Reading →
              </a>
            </div>

            {item.buyNow && (
              <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-xs rounded-md shadow-md">
                {item.buyNowLabel}
              </div>
            )}

            {/* ✅ Only show ArticlesControllers for the selected article */}
            {openArticleIndex === index && (
              <ArticlesControllers onClose={() => setOpenArticleIndex(null)} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularArticles;
