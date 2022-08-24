import React from "react";
import CourseStyle from "./Course.module.css";
import { SetStars } from "./helperFunctions";

const Course = ({ course }) => {
  return (
    <div className={`col ${CourseStyle.course}`}>
      <img src={course.image}></img>
      <div className={CourseStyle.course_body}>
        <h4 className={CourseStyle.course_title}>{course.title}</h4>
        <p className={CourseStyle.course_author}>{course.author}</p>
        <div className={CourseStyle.rating_box}>
          <span className={CourseStyle.course_rating}>{course.rating}</span>
          <div className={CourseStyle.course_stars}>
            {SetStars(course.rating)}
          </div>
          <span className={CourseStyle.course_students}>{course.people}</span>
        </div>
        <h4 className={CourseStyle.course_price}>{course.price}</h4>
      </div>
    </div>
  );
};

export default Course;
