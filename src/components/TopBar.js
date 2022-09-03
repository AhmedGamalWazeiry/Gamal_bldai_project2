import React from "react";
import Style from "./TopBar.module.css";
import { SetStars } from "./helperFunctions";

const TopBar = () => {
  return (
    <div className={Style["top-bar"]}>
      <div className={Style["title-box"]}>
        <div className={Style["title"]}>
          <h7>Learn Python: The Complete Python Programming Course</h7>
        </div>
        <div className={Style["rating-box"]}>
          <div className={Style["rating"]}>
            <span className={Style["course-rating"]}>4.4</span>
            <div className={Style["course-stars"]}>
              <i className="fa fa-star"></i>
            </div>
            <a href="#">(3.146 ratings)</a>
            <span className={Style["course-students"]}>19,237 students</span>
          </div>
        </div>
      </div>
      <div className={Style["order-button-box"]}>
        <div className={Style["order-button"]}>
          <span>E£679.99</span>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
