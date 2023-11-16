import React, { useState, useEffect } from "react";
import { Timer } from "./components/timer";
import { Posts } from "./components/fetch";
import { Location } from "./components/location";
import "./App.css";

function App() {
  const [] = useState();

  return (
    <>
      <Timer />
      <Location />
      <Posts />
    </>
  );
}
export default App;
