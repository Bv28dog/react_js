import React, { useState } from "react";
import { ShowButton } from "./components/button";
import { InputComponents } from "./components/input";
import { ListComponent } from "./components/list";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <ShowButton />
      <br />
      <br />
      <div>
        <InputComponents onAddTodo={handleAddTodo} />
        <ListComponent todos={todos} />
      </div>
    </>
  );
}
export default App;
