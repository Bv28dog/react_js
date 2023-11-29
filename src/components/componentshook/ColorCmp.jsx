import { forwardRef } from "react";

export const ColorPiker = forwardRef(function ColorPiker(props, ref) {
  return (
    <input
      type="color"
      ref={ref}
      onChange={(e) => {
        if (props.onChange) {
          props.onChange(e.target.value);
        }
      }}
    />
  );
});
