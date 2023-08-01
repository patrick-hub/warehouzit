import React from "react";

const Button = ({ children, className, style }) => {

  const defaultStyles = {
    backgroundColor: "lime-800",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",

  };

  const buttonStyles = {
    ...defaultStyles,
    ...style,
  };

  return (
    <div>
      <button className={`bg-${buttonStyles.backgroundColor} text-${buttonStyles.color} px-3 ${className}`} style={buttonStyles}>
        {children}
      </button>
    </div>
  );
};

export default Button;
