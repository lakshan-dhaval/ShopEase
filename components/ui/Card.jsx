import { section1 } from "@/app/constant";
import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-5 rounded-3xl">
      {section1.map((item, index) => (
        <div
          key={index}
          className="relative"
        >
          <div className="p-4 absolute top-5 items-center left-2 right-3">
            <h5 className="text-2xl font-semibold text-gray-800 truncate text-center">
              {item.title}
            </h5>
            <p className="text-gray-600 text-sm mt-2 text-center">{item.para}</p>
          </div>
          <img className="w-[350px] h-[350px] object-cover" src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Card;
