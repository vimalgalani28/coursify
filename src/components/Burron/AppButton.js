import React from "react";
import "./button.css";

const AppButton = ({ children, onClick, className, borderColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: `${
          borderColor ? `1px solid ${borderColor}` : "1px solid #1c1d1f"
        }`,
      }}
      className={`sub-heading-s regular px-3 h-10 items-center block ${className}`}
    >
      {children}
    </button>
  );
};
export default AppButton;
