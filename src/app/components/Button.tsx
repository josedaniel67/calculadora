'use client';
import React from "react";

const Button = ({ value, onClick }: { value: string; onClick: (value: string) => void }) => {
  return (
    <button
      className="bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-500 transition-colors"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;