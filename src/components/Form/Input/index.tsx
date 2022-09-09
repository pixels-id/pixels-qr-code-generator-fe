import React from "react";
import { sFormInput, sFormInputInvalid } from "./style";

const FormInput = ({ register, name, placeholder, require = true }) => {
  return (
    <input
      {...register(name, { required: { require }, maxLength: 50 })}
      placeholder={placeholder}
      type="text"
      className={sFormInput + sFormInputInvalid}
    />
  );
};

export default FormInput;
