import React, { useState, useRef, useEffect } from "react";
import Style from "./Overview.module.css";
const Overview = ({ course }) => {
  function showObjectives() {
    if (course === undefined) return [];
    const data = course.objectives_summary;
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
