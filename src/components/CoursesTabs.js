import React from "react";
import Style from "./CoursesTabs.module.css";

const CoursesTabs = () => {
  return (
    <div className={Style["courses-tabs"]}>
      <h1>A broad selection of courses</h1>
      <p>
        Choose from 185,000 online video courses with new additions published
        every month
      </p>
      <nav className={Style["nav-courses"]}>
        <ul className={Style["nav-courses-list"]}>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              Python
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              Excel
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              Web Development
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              JavaScript
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              Data Science
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              AWS Certification
            </a>
          </li>
          <li>
            <a href="#" className={Style["links-navcourse"]}>
              Drawing
            </a>
          </li>
        </ul>
        <div className={Style["load-taps"]}>
          <img src={require("../images/Arrow-icon-taps.png")} alt="Arrow" />
        </div>
      </nav>
    </div>
  );
};

export default CoursesTabs;
