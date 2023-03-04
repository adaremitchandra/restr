import React from "react";
import Globe from "../../public/Globe.svg";

const NavButton = ({ onClick, disabled, children, className, type, icon }) => {
  if (type === "outlined-dark") {
    return (
      <button onClick={onClick} disabled={disabled} className={`btn-outlined-dark ${disabled ? "opacity-50" : ""} ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} className={`btn-outlined ${disabled ? "opacity-50" : ""} ${className}`}>
      {children}
    </button>
  );
};

export default NavButton;
