import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGs, ...otherprops }) => (
  <button className={`${isGs ? "gs" : " "} custom-button`} {...otherprops}>
    {children}
  </button>
);

export default CustomButton;
