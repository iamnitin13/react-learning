import { memo } from "react";

function MemoComp({ name }) {
  console.log("------ Memo Component Render ------");
  return <div>MemoComp {name.firstName}</div>;
}

export default memo(MemoComp);
