import React from "react";
import { sFormSelect } from "./style";

const FormSelect = ({ children, name, register }) => {
  return (
    <select
      {...register(name, { required: { require }, maxLength: 50 })}
      className={sFormSelect}
    >
      {children}
    </select>
  );
};

export default FormSelect;
