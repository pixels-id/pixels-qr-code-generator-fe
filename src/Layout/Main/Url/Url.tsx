import React, { useState } from "react";
import { TextArea } from "components/Form";
import { Heading } from "Typography";
import { ButtonSubmit } from "components/Button";
import PreviewQR from "./PreviewQR";

export const Url = () => {
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
    <>
      <div className="basis-3/5">
        <Heading type={"h1"}>Enter Your URL</Heading>
        <p>
          You can track scans with dynamic QR codes, click here to get started
        </p>
        <TextArea
          placeholder="https://remoter.id"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <ButtonSubmit>Generate QR Code</ButtonSubmit>
      </div>
      <div className="basis-2/5">
        <PreviewQR url={url} downloadpng={downloadpng} />
      </div>
    </>
  );
};
