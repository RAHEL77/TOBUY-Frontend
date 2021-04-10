import React, { useState, useEffect } from "react";
import Ex1 from "./Ex1";
import Ex4 from "./Ex4";

export default function Ex2() {
  const [cnt, setcnt] = useState(0);

  const inc = () => {
    setcnt(cnt + 1);
    console.log(setcnt);
  };

  return (
    <div>
      <button onClick={() => setcnt(cnt + 1)}>SUBMIT</button>
      <div> {cnt}</div>
      <Ex1 />
      <Ex1 btnname={"ex1 17"} inValue={5} incValue={3} />
      <Ex4 btnname={"react class"}/>
    </div>
  );
}
