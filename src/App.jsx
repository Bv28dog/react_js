import React, { useState, useEffect, useMemo } from "react";
import { Input } from "./components/input";
import { Button } from "./button";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>Input Memo Example</h1>
      <Input defaultValue={inputValue} onChange={handleInputChange} />
      <p>Value: {inputValue}</p>
      <Button handleClick={handleClick} count={count} />
    </div>
  );
};
export default App;
