import { useRef } from "react";
import ChildA from "./ChildA";

function ParentA() {
  const parentRef = useRef();

  return (
    <div className="App">
      <ChildA ref={parentRef} />
      <button onClick={() => parentRef.current.focus()}>Focus</button>
      <button onClick={() => parentRef.current.clear()}>Clear</button>
    </div>
  );
}

export default ParentA;
