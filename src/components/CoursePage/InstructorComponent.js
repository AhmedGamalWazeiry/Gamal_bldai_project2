import React from "react";
import Instructor from "./Instructor";
import Style from "./InstructorComponent.module.css";

const InstructorComponent = ({ course }) => {
  function loadInstructors() {
    if (course === undefined) return [];
    let instructorsList = [];
    const instructorsNumber = course.visible_instructors.length;
    for (let i = 0; i < instructorsNumber; i++) {
      instructorsList.push(
        <Instructor key={i} instructor={course.visible_instructors[i]} />
      );
    }
    return instructorsList;
  }

  return (
    <div className={Style["all-instructors"]}>
      <h1>Instructors</h1>
      {loadInstructors()}
    </div>
  );
};

export default InstructorComponent;
