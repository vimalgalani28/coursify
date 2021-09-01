import React from "react";
import "./button.css";

const SubmitButton = ({ children, onClick, className, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      className={`sub-heading regular py-3 block submit-button ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default SubmitButton;
