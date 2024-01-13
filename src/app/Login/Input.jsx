import React from 'react';

const Input = ({ id, label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[15px] text-white">
        {label}
      </label>
      <input
        id={id}
        name={id}  // Add name attribute for accessibility and form submission
        placeholder={label}
        value={value}
        onChange={onChange}  // Handle the onChange event
        className="text-sm text-white h-10 px-4 w-full rounded-md bg-neutral-700 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default Input;