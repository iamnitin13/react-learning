import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function ChildA(props, ref) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return (
    <div>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default forwardRef(ChildA);
