import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { ButtonSubmit } from "components/Button";

const PreviewQR = ({ url, downloadpng }) => {
  return (
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
      <p className="text-center mt-2 text-green-800 font-semibold">{url}</p>
      <ButtonSubmit onClick={downloadpng}>Save QR Code</ButtonSubmit>
    </div>
  );
};

export default PreviewQR;
