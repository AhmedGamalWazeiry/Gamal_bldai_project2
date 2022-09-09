import React, { useState, useEffect, useRef } from "react";
import Style from "./CoursePreview.module.css";
import SideBarCourse from "./SideBarCourse";

const CoursePreview = ({ course }) => {
  const [classStyle, setClassStyle] = useState("side-bar-course");
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(false);
  isVisibleRef.current = isVisible;
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll < 400) {
      setIsVisible(true);
      setClassStyle("side-bar-course");
    } else if (isVisible) {
      setIsVisible(false);
      setClassStyle("side-bar-course-hide");
      setTimeout(() => {
        !isVisibleRef.current
          ? setClassStyle("side-bar-course-show")
          : setClassStyle("side-bar-course");
      }, 400);
    }
  };

  return (
    <div className={Style["course-preview-box"]}>
      <div className={Style["course-preview"]}>
        <img className={Style["course-image"]} src={course.image_240x135}></img>
        <img
          className={Style["play-course-image"]}
          src={require("../../images/video-play.png")}
        ></img>
        <span>Preview this course</span>
      </div>
      <div className={Style[classStyle]}>
        <SideBarCourse course={course} />
      </div>
    </div>
  );
};

export default CoursePreview;
