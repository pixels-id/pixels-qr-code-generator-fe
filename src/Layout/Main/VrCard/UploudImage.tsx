import React, { useState } from "react";
import Image from "next/image";

const UploudImage = ({ register, baseImage, uploadImage }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="w-full rounded-lg p-5 border border-green-800/50 mt-2">
      <div className="flex justify-between">
        <div className="order-first">Contact Picture</div>
        <label
          htmlFor="small-toggle"
          className="order-last mt-1 relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            onChange={() => setIsChecked(!isChecked)}
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-900"></div>
        </label>
      </div>
      {isChecked ? (
        ""
      ) : (
        <>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-green-800 file:text-white
        hover:file:bg-green-900 mt-2"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <input
            {...register("image")}
            className=""
            type="text"
            value={baseImage}
          />
        </>
      )}
      {baseImage
        ? isChecked || (
            <Image
              src={baseImage}
              width={200}
              height={200}
              alt="qr code"
              className="mx-auto my-2 rounded-lg"
            />
          )
        : ""}
    </div>
  );
};

export default UploudImage;
