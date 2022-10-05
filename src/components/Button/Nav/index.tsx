import React from "react";
import { sBtnNav } from "./style";

const ButtonNav = ({ text }) => {
  return <button className={sBtnNav}>{text}</button>;
};

export default ButtonNav;
