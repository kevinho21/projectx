import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const TextInput = ({ id, label, value, onChange }) => {
    return (
        <div className="input">
            <Label htmlFor={id}>
                {label}
            </Label>
            <Input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;
