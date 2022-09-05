import React, { useRef } from "react";
import Style from "./Test.module.css";

const Test = () => {
  const po = useRef();

  const handle = (event) => {
    event.target.className = Style["child2"];
    console.log(po.current);
    if (po.current === event.target) {
      console.log("الحمد لله");
    }
  };
  return (
    <div className={Style["parent"]}>
      <div ref={po} className={Style["child1"]} onClick={handle}>
        Hey
      </div>
      <div className={Style["child2"]} onClick={handle}>
        Hey2
      </div>
    </div>
  );
};

export default Test;
