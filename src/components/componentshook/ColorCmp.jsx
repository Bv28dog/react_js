import { forwardRef } from "react";

export const ColorPiker = forwardRef(function ColorPiker({ onChange }, ref) {
  return (
    <input
      type="color"
      ref={ref}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    />
  );
});
