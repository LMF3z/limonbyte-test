import React from 'react';

const ErrorIcon = ({ color, classes, handleClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      classNAme={`h-6 w-6 ${classes}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color || 'currentColor'}
      stroke-width="2"
      onClick={handleClick}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default ErrorIcon;
