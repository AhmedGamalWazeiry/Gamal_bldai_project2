import React, { useRef, useState, useEffect } from "react";
import CourseContent from "./CourseContent";
import InstructorComponent from "./InstructorComponent";
import Overview from "./Overview";
import ReviewComponent from "./ReviewComponent";
import Style from "./ShortCutNavigation.module.css";

const ShortCutNavigation = ({ course, content, reviews }) => {
  const scollToOverview = useRef();
  const scollToCurriculum = useRef();
  const scollToInstructor = useRef();
  const scollToReviews = useRef();
  const [styleContainer, setStyleContainer] = useState("container");
  const [styleShortCut, setStyleShortCut] = useState("short-cut");
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(false);
  isVisibleRef.current = isVisible;
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    // in case of change width only
    window.addEventListener("resize", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
      window.addEventListener("resize", listenToScroll);
    };
  }, [isVisible]);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const isMatch = window.matchMedia(`(max-width: 1080px)`);
    let scrollPositon = 0;
    isMatch.matches ? (scrollPositon = 1100) : (scrollPositon = 400);

    if (winScroll < scrollPositon) {
      setIsVisible(true);
      setStyleContainer("container");
      setStyleShortCut("short-cut");
    } else if (isVisible) {
      setIsVisible(false);
      isMatch.matches
        ? setStyleShortCut("short-cut-small")
        : setStyleShortCut("short-cut");
      setStyleContainer("container-hide");
      setTimeout(() => {
        isVisibleRef.current
          ? setStyleContainer("container")
          : setStyleContainer("container-show");
      }, 400);
    } else if (isMatch.matches && styleShortCut === "short-cut") {
      console.log(isMatch.matches + " " + styleShortCut);
      setStyleShortCut("short-cut-small");
    }
  };

  return (
    <>
      <div className={Style[styleContainer]}>
        <div className={Style["short-cut-box"]}>
          <div className={Style[styleShortCut]}>
            <button
              className={Style["overview-button"]}
              onClick={() => {
                window.scrollTo({
                  top: scollToOverview.current.offsetTop - 180,
                });
              }}
            >
              Overview
            </button>
            <button
              className={Style["curriculum-button"]}
              onClick={() => {
                window.scrollTo({
                  top: scollToCurriculum.current.offsetTop - 180,
                });
              }}
            >
              Curriculum
            </button>
            <button
              className={Style["instructor-button"]}
              onClick={() => {
                window.scrollTo({
                  top: scollToInstructor.current.offsetTop - 180,
                });
              }}
            >
              Instructor
            </button>
            <button
              className={Style["reviews-button"]}
              onClick={() => {
                window.scrollTo({
                  top: scollToReviews.current.offsetTop - 180,
                });
              }}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>
      <div ref={scollToOverview}>
        <Overview course={course} />
      </div>

      <div ref={scollToCurriculum}>
        <CourseContent content={content} />
      </div>
      <div ref={scollToInstructor}>
        <InstructorComponent course={course} />
      </div>
      <div ref={scollToReviews}>
        <ReviewComponent reviews={reviews} />
      </div>
    </>
  );
};

export default ShortCutNavigation;
