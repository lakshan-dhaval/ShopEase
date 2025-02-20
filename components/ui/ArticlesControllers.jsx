"use client";
import { controllers } from "@/app/constant";
import { useParams } from "next/navigation";
import React from "react";
import { FaRegComment, FaRegEye } from "react-icons/fa";

const ArticlesControllers = () => {
  const { id } = useParams();
  const article = controllers.find((item) => item.id === Number(id));

  if (!article) {
    return <p className="text-red-500 text-center">Article not found!</p>;
  }

  return (
    <div className="p-5">
      <div className="mb-8">
        <img src={article.image} alt={article.alt} className="rounded-xl mt-3 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
        <h1 className="text-2xl font-bold text-gray-900 mt-5">{article.title}</h1>

        <div className="text-gray-500 text-sm flex items-center gap-2 mt-2">
          <span>📅 January 20, 2022</span>
          <span>/</span>
          <span>Posted by Rose Tyler</span>
          <span>/</span>
          <span className="flex items-center gap-1">
            <FaRegEye /> 767
          </span>
          <span>/</span>
          <span className="flex items-center gap-1">
            <FaRegComment /> 0
          </span>
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed">{article.para1}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">{article.subtitle || "Breaking Up With Fast Sound Has Been Easier"}</h2>

        <p className="text-gray-700 mt-2 leading-relaxed">{article.para2}</p>
      </div>
    </div>
  );
};

export default ArticlesControllers;
