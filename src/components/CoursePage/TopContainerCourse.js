import React from "react";
import Style from "./TopContainerCourse.module.css";
import CoursePreview from "./CoursePreview";
import { SetStars } from "../helperFunctions";
import SideBarCourse from "./SideBarCourse";

const TopContainerCourse = ({ course }) => {
  const getInstructors = () => {
    let instructorsList = [];
    for (let i = 0; i < course.visible_instructors.length; i++) {
      instructorsList.push(
        <a key={i} href="#">
          {course.visible_instructors[i].display_name}
        </a>
      );
      if (i !== course.visible_instructors.length - 1) {
        instructorsList.push(
          <span key={i + course.visible_instructors.length}> ,</span>
        );
      }
    }
    return instructorsList;
  };
  return (
    <div className={Style["top-container"]}>
      <div className={Style["course-info"]}>
        <div className={Style["links-explorer-box"]}>
          <div className={Style["links-explorer"]}>
            <a href="#">Development</a>
            <img
              src={require("../../images/Arrow-icon-courses-right.png")}
            ></img>
            <a href="#">Programming Languages</a>
            <img
              src={require("../../images/Arrow-icon-courses-right.png")}
            ></img>
            <a href="#">Python</a>
          </div>
        </div>
        <div className={Style["course-preview-small"]}>
          <CoursePreview course={course} />
        </div>

        <div className={Style["title"]}>
          <h2>{course.title}</h2>
        </div>
        <div className={Style["course-intro"]}>
          <p>{course.headline}</p>
        </div>
        <div className={Style["rating-box"]}>
          <div className={Style["rating"]}>
            <span className={Style["course-rating"]}>
              {Math.round(course.rating * 10) / 10}
            </span>
            <div className={Style["course-stars"]}>
              {SetStars(course.rating)}
            </div>
            <a href="#">({course.avg_rating_recent})</a>
            <span className={Style["course-students"]}>
              {course.num_reviews} students
            </span>
          </div>
        </div>
        <div className={Style["author-box"]}>
          <div className={Style["author"]}>
            <span>Created by</span>

            {getInstructors()}
          </div>
        </div>
        <div className={Style["subtitles-box"]}>
          <div className={Style["subtitles"]}>
            <span>
              <img src={require("../../images/new.png")}></img>Last updated
              9/2015
            </span>

            <span>
              <img src={require("../../images/language-icon-white.png")}></img>{" "}
              English
            </span>
            <span>
              <img src={require("../../images/subtitle.png")}></img> English
            </span>
          </div>
        </div>
        <div className={Style["price-container"]}>
          <div className={Style["price-box"]}>
            <div className={Style["price"]}>
              <span className={Style["real-price"]}>E£149.99</span>
              <span className={Style["old-price"]}>E£679.99</span>
              <span>78% off</span>
            </div>
          </div>
          <div className={Style["discount-time-box"]}>
            <div className={Style["discount-time"]}>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>1 hour left at this price!</span>
            </div>
          </div>
        </div>
        <div className={Style["cart-container"]}>
          <div className={Style["cart-box"]}>
            <div className={Style["cart"]}>
              <button>Add to cart</button>
              <span>30-Day Money-Back Guarantee</span>
              <span>Full Lifetime Access</span>
            </div>
          </div>
          <div className={Style["cart-links-box"]}>
            <div className={Style["cart-links"]}>
              <a href="#">Share</a>
              <a href="#">Gift this course</a>
              <a href="#">Apply Coupon</a>
            </div>
          </div>
        </div>
      </div>
      <div className={Style["course-preview-large"]}>
        <CoursePreview course={course} />
      </div>
    </div>
  );
};

export default TopContainerCourse;
