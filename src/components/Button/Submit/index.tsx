import React from "react";
import { sBtnSubmit } from "./style";

const ButtonSubmit = ({ text }) => {
  return <button className={sBtnSubmit}>{text}</button>;
};

export default ButtonSubmit;
