import React, { useRef } from "react";
import Style from "./Test.module.css";
import { Routes, Route, Link } from "react-router-dom";
const Test2 = () => {
  return (
    <>
      <div id={Style["box"]}>Waziry</div>
      <nav>
        <Link to="/Test2">About222</Link>
      </nav>
      ;
    </>
  );
};

export default Test2;
