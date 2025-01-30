'use client';
import React from "react";

const Display = ({ value }: { value: string }) => {
  return (
    <div className="bg-gray-700 p-4 text-right text-2xl font-mono rounded-lg text-white">
      {value || "0"}
    </div>
  );
};

export default Display;