import React from "react";
import { sBtnIcon } from "./style";

const ButtonIcon = ({ children, func, type }) => {
  return (
    <button
      type="button"
      className={sBtnIcon}
      onClick={() =>
        func({
          type: type,
          link: "",
          text: "",
        })
      }
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
