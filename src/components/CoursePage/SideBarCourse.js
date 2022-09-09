import React from "react";
import Style from "./SideBarCourse.module.css";

const SideBarCourse = ({ course }) => {
  return (
    <div className={Style["side-bar-container"]}>
      <div className={Style["price-cart-box"]}>
        <div className={Style["price-cart"]}>
          <span className={Style["real-price"]}>{course.price}</span>
          <button className={Style["button-cart"]}>Add to cart</button>
          <button className={Style["button-buy"]}>Buy now</button>
          <span className={Style["money-back"]}>
            30-Day Money-Back Guarantee
          </span>
        </div>
      </div>
      <div className={Style["course-content-box"]}>
        <div className={Style["course-content"]}>
          <span className={Style["title-list"]}>This course includes:</span>
          <ul>
            <li>
              <span className={Style["item-icon"]}>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>
                4 hours on-demand video
              </span>
            </li>
            <li>
              <span className={Style["item-icon"]}>
                <i className="fa fa-file-o" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>1 article</span>
            </li>
            <li>
              <span className={Style["item-icon"]}>
                <i className="fa fa-download" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>downloadable resources</span>
            </li>
            <li>
              <span className={Style["item-icon"]}>
                <i className="fas fa-infinity" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>Full lifetime access</span>
            </li>
            <li>
              <span className={Style["item-icon"]}>
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>
                Access on mobile and TV
              </span>
            </li>

            <li>
              <span className={Style["item-icon"]}>
                <i className="fa fa-trophy" aria-hidden="true"></i>
              </span>
              <span className={Style["item-text"]}>
                Certificate of completion
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style["cart-links-box"]}>
        <div className={Style["cart-links"]}>
          <a href="#">Share</a>
          <a href="#">Gift this course</a>
          <a href="#">Apply Coupon</a>
        </div>
      </div>
      <div className={Style["udemy-business-box"]}>
        <div className={Style["udemy-business"]}>
          <h5>Training 5 or more people?</h5>
          <p>
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
          <button className={Style["button-udemy-business"]}>
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarCourse;
