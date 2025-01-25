import React, { useEffect } from "react";

const Wishlist = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-end">
      <button
        onClick={onClose}
        className="mt-2 mr-2 bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200"
      >
        <svg
          // xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="bg-white h-full w-[54vh] shadow-lg transform translate-x-0 transition-transform duration-300 ease-out relative">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9 9m0 0l9-9M9 21l12-12"
              />
            </svg>
            <h2 className="text-xl font-semibold ml-2">Wishlist</h2>
          </div>

          <div className="text-gray-700">
            <p className="text-center text-sm">
              Your wishlist is currently empty.
            </p>
            <button
              className="mt-4 bg-black text-white py-3 rounded-md w-full"
              onClick={onClose}
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
