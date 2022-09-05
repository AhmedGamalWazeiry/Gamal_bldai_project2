import React, { useState, useRef, useEffect } from "react";
import Style from "./Overview.module.css";
const Overview = ({ courses }) => {
  function showObjectives() {
    if (
      courses &&
      Object.keys(courses).length === 0 &&
      Object.getPrototypeOf(courses) === Object.prototype
    )
      return [];
    const data = courses.courses[0].objectives_summary;
    let lists = [];
    for (let i = 0; i < data.length; i++) {
      lists.push(<li key={i}>{data[i]}</li>);
    }
    return lists;
  }
  return (
    <div className={Style["overview-box"]}>
      <div className={Style["overview"]}>
        <h1>What you'll learn</h1>
        <ul>{showObjectives()}</ul>
      </div>
    </div>
  );
};

export default Overview;
