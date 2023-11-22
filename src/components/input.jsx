import React, { memo } from "react";

export const Input = memo(({ defaultValue, onChange }) => {
  console.log("input render");

  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input type="text" defaultValue={defaultValue} onChange={handleChange} />
  );
});
