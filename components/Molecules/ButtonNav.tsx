import React from "react";

const ButtonNav = ({ text }) => {
  return (
    <button className="bg-white shadow-md hover:outline-green-800 hover:outline hover:outline-2  text-green-800 font-bold py-1.5 px-4 rounded-lg mr-1">
      {text}
    </button>
  );
};

export default ButtonNav;
