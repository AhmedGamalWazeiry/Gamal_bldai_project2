import React from "react";
import Style from "./TopCategories.module.css";

const TopCategories = () => {
  return (
    <div className={Style["top-categories"]}>
      <h3>Top categories</h3>
      <div className="container">
        <div className={`row row-cols-1 row-cols-md-3 row-cols-lg-4`}>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-business-v2.jpg")}
                alt="lohp-category-business"
              />
              <figcaption>Business</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-design-v2.jpg")}
                alt="lohp-category-design"
              />
              <figcaption>Design</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-development-v2.jpg")}
                alt="lohp-category-development"
              />
              <figcaption>Development</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-it-and-software-v2.jpg")}
                alt="lohp-category-it-and-software"
              />
              <figcaption>It and Software</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-marketing-v2.jpg")}
                alt="lohp-category-marketing"
              />
              <figcaption>Marketing</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-music-v2.jpg")}
                alt="lohp-category-music"
              />
              <figcaption>Music</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-personal-development-v2.jpg")}
                alt="lohp-category-personal-development"
              />
              <figcaption>Personal Development-</figcaption>
            </figure>
          </div>
          <div className={Style["col"]}>
            <figure className={Style["fig-card"]}>
              <img
                src={require("../images/lohp-category-photography-v2.jpg")}
                alt="lohp-category-personal-photography"
              />
              <figcaption>Photography</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
