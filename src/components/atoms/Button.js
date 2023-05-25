import React from "react";

const Button = ({ type, onClick, disabled, children }) => {
    return (
        <button
            className={`button ${disabled ? 'disabled' : ''}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;