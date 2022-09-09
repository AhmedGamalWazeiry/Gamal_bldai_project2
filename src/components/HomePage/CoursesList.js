import React from "react";
import { useSearchParams } from "react-router-dom";
import Course from "../Course";
import CourseStyle from "./CoursesList.module.css";
const CoursesList = ({ coursesList, coursesDescription, coursesTitle }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function getCoursesComponents(coursesList) {
    if (coursesList === undefined) return [];
    let filter = searchParams.get("query");
    if (filter === null) filter = "";
    let courses = [];
    courses = coursesList.map((course) => {
      if (course.title.includes(filter)) {
        return <Course key={course.id} course={course} />;
      }
    });
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(courses[i]);
    }
    return list;
  }
  return (
    <div className={CourseStyle["courses-box"]}>
      <h2 className={CourseStyle["courses-title"]}>{coursesTitle}</h2>
      <div className={CourseStyle["description-box"]}>
        <p className={CourseStyle["courses-description"]}>
          {coursesDescription}
        </p>
        <div className={CourseStyle["explore-course"]}>Explore Python</div>
      </div>
      <div className={CourseStyle["courses-container"]}>
        <div className={CourseStyle["courses-list"]}>
          {getCoursesComponents(coursesList)}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
