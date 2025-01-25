import React, { useEffect } from "react";

const Cart = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, quantity: 1, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 40, quantity: 3, imageUrl: 'product3.jpg' },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-end">
      <button
        onClick={onClose}
        className="mt-2 mr-2 bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200"
      >
        <svg
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
            <h2 className="text-xl font-semibold ml-2">Your Cart</h2>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="w-16 h-16 object-cover rounded-md" src={item.imageUrl} alt={item.name} />
                  <div className="ml-4">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-gray-700">
            <p className="text-xl font-semibold">Total: ${totalPrice}</p>
            <button
              className="mt-4 bg-black text-white py-3 rounded-md w-full"
              onClick={onClose}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
