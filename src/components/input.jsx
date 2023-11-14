import { useState } from "react";

export const InputComponents = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    onAddTodo(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your todo"
      />
      <button onClick={handleAddTodo}> Add todo List</button>
    </div>
  );
};
