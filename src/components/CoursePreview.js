import React, { useState, useEffect } from "react";
import Style from "./CoursePreview.module.css";
import SideBarCourse from "./SideBarCourse";

const CoursePreview = () => {
  const [classStyle, setClassStyle] = useState("side-bar-course");
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (winScroll < 400) {
      setIsVisible(true);
      setClassStyle("side-bar-course");
    } else if (isVisible) {
      setIsVisible(false);
      setClassStyle("side-bar-course-hide");
      setTimeout(() => {
        setClassStyle("side-bar-course-show");
      }, 400);
    }
    console.log(isVisible);
  };

  return (
    <div className={Style["course-preview-box"]}>
      <div className={Style["course-preview"]}>
        <img
          className={Style["course-image"]}
          src={require("../images/Course-1.jpg")}
        ></img>
        <img
          className={Style["play-course-image"]}
          src={require("../images/video-play.png")}
        ></img>
        <span>Preview this course</span>
      </div>
      <div className={Style[classStyle]}>
        <SideBarCourse />
      </div>
    </div>
  );
};

export default CoursePreview;
