import React from "react";
import ChildB from "./ChildB";

function ChildA() {
  return (
    <div>
      <h1>Zeeshan</h1>
      <h1><ChildB/></h1>
    </div>
  );
}

export default ChildA;
