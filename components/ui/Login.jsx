import React, { useState, useEffect } from "react";

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

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
            <h2 className="text-xl font-semibold ml-2">SIGN IN</h2>
          </div>

          <div className="flex border-b mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 text-center py-2 ${
                isLogin ? "border-b-2 border-black font-semibold" : "text-gray-500"
              }`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 text-center py-2 ${
                !isLogin ? "border-b-2 border-black font-semibold" : "text-gray-500"
              }`}
            >
              REGISTER
            </button>
          </div>

          <form>
            {isLogin ? (
              <>
                <input
                  type="text"
                  placeholder="Username or email *"
                  className="border p-3 w-full mb-4 rounded-md"
                />
                <div className="relative mb-4">
                  <input
                    type="password"
                    placeholder="Password *"
                    className="border p-3 w-full rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.001 4.057-3.78 7-8.258 7-4.479 0-8.269-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white py-3 rounded-md w-full"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="border p-3 w-full mb-4 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border p-3 w-full mb-4 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password *"
                  className="border p-3 w-full mb-4 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-black text-white py-3 rounded-md w-full"
                >
                  Register
                </button>
              </>
            )}
          </form>

          {isLogin && (
            <button className="text-sm text-center text-gray-500 mt-4 w-full">
              Lost your password?
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
