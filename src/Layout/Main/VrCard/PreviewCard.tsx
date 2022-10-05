import React from "react";

const PreviewCard = () => {
  return (
    <div className="bg-white md:mt-0 md:w-90 md:ml-10 rounded-lg p-5 mt-10">
      <h2 className="font-semibold my-2">QR Code</h2>
      <p className="text-center mt-2 text-green-800 font-semibold">Test</p>
      <button className="w-full bg-green-800 text-white cursor-pointer p-2 rounded-lg mt-2 hover:bg-green-900">
        Save QR Code
      </button>
    </div>
  );
};

export default PreviewCard;
