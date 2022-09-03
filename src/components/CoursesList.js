import React from "react";
import CourseStyle from "./CoursesList.module.css";
import { getCoursesComponents } from "./helperFunctions";
const CoursesList = ({ coursesList, coursesDescription, coursesTitle }) => {
  return (
    <div className={CourseStyle["courses-box"]}>
      <h2 className={CourseStyle["courses-title"]}>{coursesTitle}</h2>
      <div className={CourseStyle["description-box"]}>
        <p className={CourseStyle["courses-description"]}>
          {coursesDescription}
        </p>
        <div className={CourseStyle["explore-course"]}>Explore Python</div>
      </div>
      <div className={`container-fluid ${CourseStyle["courses-container"]}`}>
        <div
          className={`row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ${CourseStyle["courses-list"]}`}
        >
          {getCoursesComponents(coursesList)}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
