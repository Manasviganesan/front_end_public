// footer.tsx
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white absolute text-[16px] leading-5 bottom-0 py-[40px] px-0 border-black text-lg font-semibold">
      <div className="w-11/12 m-auto flex flex-wrap justify-center items-start">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center m-auto mb-8 sm:mb-0">
          <div className="h-[100px] flex items-center justify-center ">
            <i className="fas fa-people-group text-3xl p-3 rounded-full shadow-md cursor-pointer"></i>
          </div>
          <p className="mt-4">
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center m-auto mb-8 sm:mb-0">
          <div className="h-[100px] flex items-center justify-center">
            <i className="fab fa-facebook text-3xl w-12 h-12 p-2  rounded-full shadow-md cursor-pointer hover:bg-blue-800 hover:text-white"></i>
            <i className="fab fa-instagram text-3xl w-12 h-12 p-2 rounded-full shadow-md cursor-pointer hover:bg-purple-600 hover:text-white"></i>
            <i className="fab fa-twitter text-3xl w-12 h-12 p-2 rounded-full shadow-md cursor-pointer hover:bg-blue-300 hover:text-white"></i>
            <i className="fab fa-google text-3xl w-12 h-12 p-2 rounded-full shadow-md cursor-pointer hover:bg-red-500 hover:text-white"></i>
          </div>
          <p className="mt-4">
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center m-auto mb-8 sm:mb-0">
          <div className="h-[100px] flex items-center justify-center">
            <form className="flex items-center">
              <i className="far fa-envelope text-3xl p-2 w-12 h-12 rounded-full  cursor-pointer"></i>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-black rounded-full py-1 px-3"
                required
              />
              <button className="fas fa-arrow-right text-3x2 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300 hover:text-black transition duration-300"></button>
            </form>
          </div>
          <p className="mt-4">
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
