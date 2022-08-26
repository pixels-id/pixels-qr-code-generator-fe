import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export const Card = () => {
  const saveSvgAsPng = require("save-svg-as-png");
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: "white",
  };

  const [url, setUrl] = useState("");

  const downloadpng = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("svg-chart"),
      "qr.png",
      imageOptions
    );
  };

  return (
    <div>
      <div className="w-full flex-wrap md:flex justify-right bg-green-100 rounded-lg p-5 md:p-10 my-12">
        <div className="basis-full">
          <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-1.5 px-4 rounded-lg mr-1">
            URL
          </button>
        </div>
        <div className="basis-3/5">
          <h1 className="font-bold text-2xl text-green-900">Enter Your URL</h1>
          <p>
            You can track scans with dynamic QR codes, click here to get started
          </p>
          <textarea
            className="w-full p-3 align-text-top bg-white h-20 mt-2 focus:outline-none focus:border-green-500 focus:ring-green-500/20 focus:ring-4 focus:border rounded-md"
            placeholder="https://remoter.id"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          ></textarea>
          <button className="w-full bg-green-800 text-white p-2 rounded-lg mt-2 hover:bg-green-900">
            Generate QR Code
          </button>
        </div>
        <div className="basis-2/5">
          <div className="bg-white md:mt-0 md:w-90 md:ml-10 rounded-lg p-5 mt-10">
            <QRCodeSVG
              id={"svg-chart"}
              className="mx-auto"
              value={url}
              size={128}
              bgColor={"#ffffff"}
              fgColor={"#13a092"}
              level={"L"}
              includeMargin={false}
              imageSettings={{
                src: "./assets/logo.png",
                x: undefined,
                y: undefined,
                height: 34,
                width: 37,
                excavate: true,
              }}
            />
            <p className="text-center mt-2 text-green-800 font-semibold">
              {url}
            </p>
            {/* <img
            className="md:max-w-xs mx-auto -hue-rotate-180"
            src="./assets/qr-illustration.png"
          /> */}
            <button
              onClick={downloadpng}
              className="w-full bg-green-800 text-white cursor-pointer p-2 rounded-lg mt-2 hover:bg-green-900"
            >
              Save QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
