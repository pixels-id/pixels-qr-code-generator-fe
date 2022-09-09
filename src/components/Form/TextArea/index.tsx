import React from "react";
import { sFormTextArea, sFormTextAreaInvalid } from "./style";

const FormTextArea = ({ register, name, placeholder, require = true }) => {
  return (
    <textarea
      {...register(name, { required: require })}
      placeholder={placeholder}
      className={sFormTextArea + sFormTextAreaInvalid}
    />
  );
};

export default FormTextArea;
