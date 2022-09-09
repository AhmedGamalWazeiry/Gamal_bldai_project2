import React, { useRef } from "react";
import Style from "./Test.module.css";
import { Routes, Route, Link } from "react-router-dom";
const Test = () => {
  return (
    <>
      <div id={Style["box"]}>Ahmed</div>
      <nav>
        <Link to="/Test2">Test1</Link>
      </nav>
      ;
    </>
  );
};

export default Test;
