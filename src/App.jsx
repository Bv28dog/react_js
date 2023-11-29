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
    <div style={{ marginLeft: "600px" }}>
      <div>Selected Color: {selectedColor}</div>
      <div>
        {displayColor && (
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: displayColor,
              marginTop: "20px",
              borderRadius: "10px",
            }}
          ></div>
        )}
      </div>
      <br />
      <ColorPiker
        ref={colorPikerRef}
        onChange={(color) => {
          setSelectedColor(color);
        }}
      />
      <button onClick={handleShowColor}>Show Color</button>
      <br />
      <br />
    </div>
  );
};

export default App;
