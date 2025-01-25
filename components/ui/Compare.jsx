import React, { useEffect } from "react";

const Modal = ({ onClose, children, title }) => {
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
          xmlns="http://www.w3.org/2000/svg"
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
          {title && (
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
                  d="M12 14v2m-6 2h12m-6-6h.01M10 10a2 2 0 11-4 0 2 2 0 014 0zm4 0a2 2 0 110 4 2 2 0 010-4z"
                />
              </svg>
              <h2 className="text-xl font-semibold ml-2">{title}</h2>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
