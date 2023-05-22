import React from "react";

const Button = ({ onClick, disabled, children }) => {
    return (
        <button
            className={`button ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;