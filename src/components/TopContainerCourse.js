import React from "react";
import Style from "./TopContainerCourse.module.css";
import CoursePreview from "./CoursePreview";
import { SetStars } from "./helperFunctions";
import SideBarCourse from "./SideBarCourse";

const TopContainerCourse = () => {
  return (
    <div className={Style["top-container"]}>
      <div className={Style["course-info"]}>
        <div className={Style["links-explorer-box"]}>
          <div className={Style["links-explorer"]}>
            <a href="#">Development</a>
            <img src={require("../images/Arrow-icon-courses-right.png")}></img>
            <a href="#">Programming Languages</a>
            <img src={require("../images/Arrow-icon-courses-right.png")}></img>
            <a href="#">Python</a>
          </div>
        </div>
        <div className={Style["course-preview-small"]}>
          <CoursePreview />
        </div>

        <div className={Style["title"]}>
          <h2>Learn Python: The Complete Python Programming Course</h2>
        </div>
        <div className={Style["course-intro"]}>
          <p>
            Learn A-Z everything about Python, from the basics, to advanced
            topics like Python GUI, Python Data Analysis, and more!
          </p>
        </div>
        <div className={Style["rating-box"]}>
          <div className={Style["rating"]}>
            <span className={Style["course-rating"]}>2</span>
            <div className={Style["course-stars"]}>{SetStars(2)}</div>
            <a href="#">(3.146 ratings)</a>
            <span className={Style["course-students"]}>19,237 students</span>
          </div>
        </div>
        <div className={Style["author-box"]}>
          <div className={Style["author"]}>
            <span>Created by</span>
            <a href="#">ahmed gamal,</a>
            <a href="#">ahmed wazeiry</a>
          </div>
        </div>
        <div className={Style["subtitles-box"]}>
          <div className={Style["subtitles"]}>
            <span>
              <img src={require("../images/new.png")}></img>Last updated 9/2015
            </span>

            <span>
              <img src={require("../images/language-icon-white.png")}></img>{" "}
              English
            </span>
            <span>
              <img src={require("../images/subtitle.png")}></img> English
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
        <CoursePreview />
      </div>
    </div>
  );
};

export default TopContainerCourse;
