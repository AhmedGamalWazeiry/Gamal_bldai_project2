import React from "react";
import Style from "./Course.module.css";
import { SetStars } from "./helperFunctions";

const Course = ({ course }) => {
  return (
    <div className={`col ${Style["course"]}`}>
      <img src={course.image}></img>
      <div className={Style["course-body"]}>
        <h4 className={Style["course-title"]}>{course.title}</h4>
        <p className={Style["course-author"]}>{course.author}</p>
        <div className={Style["rating-box"]}>
          <span className={Style["course-rating"]}>{course.rating}</span>
          <div className={Style["course-stars"]}>{SetStars(course.rating)}</div>
          <span className={Style["course-students"]}>{course.people}</span>
        </div>
        <h4 className={Style["course-price"]}>{course.price}</h4>
      </div>
    </div>
  );
};

export default Course;
