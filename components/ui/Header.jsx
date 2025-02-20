"use client";
import React, { useState } from "react";
import { ArrowsRotate, Heart, Search, User } from "@/public/icons/route";
import Image from "next/image";
import Login from "./Login";
import Modal from "./Compare";
import Wishlist from "./Wishlist";
import Typewriter from "typewriter-effect";
import Cart from "./Cart";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCompareOpen, setCompareOpen] = useState(false);
  const [isWhishlist, setIsWishlistOpen] = useState(false);

  const [isCartVisible, setIsCartVisible] = useState(false);

  

  const handleCompareClose = () => {
    setCompareOpen(false);
  };


  return (
    <>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex justify-start">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex-1">
          <ul className="flex justify-center space-x-5">
            <li>Elements</li>
            <li>Shop</li>
            <li>Track Order</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
            <li className="flex items-center">
              <Search />
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-end gap-5">
          <button className="flex gap-2">
            <ArrowsRotate
              className="flex gap-2"
              onClick={() => setCompareOpen(true)}
            />
          </button>
          <button className="flex gap-2">
            <Heart
              className="flex gap-2"
              onClick={() => setIsWishlistOpen(true)}
            />
          </button>
          <button className="flex gap-2" onClick={() => setIsLoginOpen(true)}>
            Sign In
            <User />
          </button>
          {/* Cart button */}
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-2xl"
            onClick={() => setIsCartVisible (true)}
          >
            Cart $0.00
          </button>
        </div>
      </div>

      <div className="relative px-6 py-4">
        <Image
          src="/bg-web.jpeg"
          className="rounded-3xl relative"
          alt="bg"
          width={1489}
          height={580}
        />
        <div className="absolute inset-0 flex items-center justify-start ">
          <div className="text-black text-[50px] font-bold bg-opacity-50 px-6 py-3 rounded-lg ml-10">
            <div className="text-[12px] text-gray-500 mt-5">
              THE NEXT GENERATION
            </div>
            <p className="mt-3 text-[60px]">Innovation That</p>
            <Typewriter
              className="font-extrabold bg-white"
              options={{
                loop: true, // Infinite looping
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Changed the World")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Drives Emotion")
                  .pauseFor(2000)
                  .start();
              }}
            />
            <p className="text-[18px] mt-3 text-gray-800 font-medium">
              Get instant alerts for anyone who approaches,
              <br /> even if they don’t press the headphone.
            </p>
          </div>
        </div>
      </div>

      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      {isCompareOpen && <Modal onClose={handleCompareClose} title="Compare" />}
      {isWhishlist && <Wishlist onClose={() => setIsWishlistOpen(false)} />}

      {isCartVisible && <Cart onClose={() => setIsCartVisible(false)} />}
    </>
  );
};

export default Header;
