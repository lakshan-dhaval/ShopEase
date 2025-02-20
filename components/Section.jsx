"use client";
import { section2A, section2B } from "@/app/constant";
import React from "react";

const Section = () => {
  return (
    <>
      <div className="flex justify-between mt-5 mx-5 mb-5">
        <div>
          {section2A.map((item, index) => (
            <img
              key={index} // Add key prop with index or a unique identifier
              className="h-[478px] w-[729px] object-cover rounded-2xl"
              src={item.image}
              alt={item.title}
            />
          ))}
        </div>
        <div className="flex items-center h-[478px] w-[600px]">
          {section2B.map((item, index) => (
            <div key={index}> {/* Add key prop here as well */}
              <p className="p-5 tracking-widest text-[12px]">{item.para}</p>
              <h2 className="p-5 text-[40px] font-semibold">{item.title}</h2>
              <p className="p-5">{item.para2}</p>
              <button className="p-4 px-10 rounded-full text-white bg-[#3B82F6]">
                View All Products
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
