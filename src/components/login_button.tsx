// login_button.tsx
import React, { useState } from "react";
import Profile from "./profile.tsx";

const Button = () => {
  const [showIcon, setShowIcon] = useState(false);

  const replace = () => {
    setShowIcon(true);
  };

  return (
    <div>
      {showIcon ? (
        <Profile />
      ) : (
        <button
          className="bg-white text-black rounded-full border-2 border-white px-8 py-1 inline-block text-lg font-semibold cursor-pointer transition duration-400 ease-in-out hover:bg-gray-300 hover:border-gray-300"
          onClick={replace}
        >
          Login/Sign Up
        </button>
      )}
    </div>
  );
};

export default Button;
