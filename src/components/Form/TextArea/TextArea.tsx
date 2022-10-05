import React from "react";
import { sFormTextArea, sFormTextAreaInvalid } from "./style";

const TextArea = (props) => {
  return (
    <textarea {...props} className={sFormTextArea + sFormTextAreaInvalid} />
  );
};

export default TextArea;
