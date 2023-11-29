import React, { useRef, useState } from "react";
import { ColorPiker } from "./components/componentshook/ColorCmp";

const App = () => {
  const colorPikerRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [displayColor, setDisplayColor] = useState("");

  const handleShowColor = () => {
    if (colorPikerRef.current) {
      const color = colorPikerRef.current.value;
      setSelectedColor(color);
      setDisplayColor(color);
    }
  };
  return (
    <div>
      <ColorPiker
        ref={colorPikerRef}
        onChange={(color) => {
          setSelectedColor(color);
        }}
      />
      <button onClick={handleShowColor}>Show Color</button>
      <div>Selected Color: {selectedColor}</div>
      {displayColor && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: displayColor,
            marginTop: "20px",
          }}
        ></div>
      )}
    </div>
  );
};

export default App;
