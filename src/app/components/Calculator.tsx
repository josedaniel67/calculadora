'use client';
import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <Display value={input || result} />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {buttons.map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;