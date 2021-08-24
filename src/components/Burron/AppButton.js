import React from "react";
import "./button.css";

const AppButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`sub-heading-s regular btn-outline px-3 h-10 items-center block ${className}`}
    >
      {children}
    </button>
  );
};
export default AppButton;
