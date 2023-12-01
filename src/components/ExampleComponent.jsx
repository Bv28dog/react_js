import React, { useRef } from 'react';

const ExampleComponent = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Фокус на інпут</button>
    </div>
  );
};

export default ExampleComponent;

