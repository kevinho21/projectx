import React from 'react';

const Input = ({ type, id, value, onChange, placeHolder = "" }) => {
    return (
        <input
            className="input-field"
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeHolder={placeHolder}
        />
    );
};

export default Input;