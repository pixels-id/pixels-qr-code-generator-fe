import React from "react";
import { ButtonSubmit } from "../../components/Button";

const Preview = () => {
  return (
    <div className="basis-2/5">
      <div className="bg-white md:mt-0 md:w-90 md:ml-10 rounded-lg p-5 mt-10">
        <h2 className="font-semibold my-2">QR Code</h2>
        <p className="text-center mt-2 text-green-800 font-semibold">Test</p>
        <ButtonSubmit text="Save QR Code" />
      </div>
    </div>
  );
};

export default Preview;
