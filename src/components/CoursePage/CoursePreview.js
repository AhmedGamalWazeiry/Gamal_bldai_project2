import React, { useState, useEffect, useRef } from "react";
import Style from "./CoursePreview.module.css";
import SideBarCourse from "./SideBarCourse";

const CoursePreview = ({ course }) => {
  const [classStyle, setClassStyle] = useState("side-bar-course");
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    isVisibleRef.current = isVisible;
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // if (winScroll >= 3190) {
    //   setClassStyle("side-bar-course-show-fixed");
    //   return;
    // } else {
    //   if (classStyle === "side-bar-course-show-fixed") {
    //     setIsVisible(true);
    //   }
    // }
    if (winScroll < 400) {
      setIsVisible(true);
      setClassStyle("side-bar-course");
    } else if (isVisible) {
      setIsVisible(false);
      setClassStyle("side-bar-course-hide");
      setTimeout(() => {
        !isVisibleRef.current && !winScroll < 3190
          ? setClassStyle("side-bar-course-show")
          : setClassStyle("side-bar-course");
      }, 400);
    }
  };

  return (
    <div className={Style["course-preview-box"]}>
      <div className={Style["course-preview"]}>
        <img
          className={Style["course-image"]}
          src={require("../../images/Course-1.jpg")}
        ></img>
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
