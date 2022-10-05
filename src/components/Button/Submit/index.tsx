import React from "react";
import { sBtnSubmit } from "./style";

const ButtonSubmit = (props) => {
  return (
    <button {...props} className={sBtnSubmit}>
      {props.children}
    </button>
  );
};

export default ButtonSubmit;
