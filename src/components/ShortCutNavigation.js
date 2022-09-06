import React, { useRef, useState, useEffect } from "react";
import CourseContent from "./CourseContent";
import Overview from "./Overview";
import Style from "./ShortCutNavigation.module.css";

const ShortCutNavigation = ({ courses }) => {
  const scollToOverview = useRef();
  const scollToCurriculum = useRef();
  const scollToInstructor = useRef();
  const scollToReviews = useRef();
  const [styleContainer, setStyleContainer] = useState("container");
  const [styleShortCut, setStyleShortCut] = useState("short-cut");
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    isVisibleRef.current = isVisible;
    return () => window.removeEventListener("scroll", listenToScroll);
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
    }
  };

  return (
    <>
      <div className={Style[styleContainer]}>
        <div className={Style["short-cut-box"]}>
          <div className={Style[styleShortCut]}>
            <button
              className={Style["overview-button"]}
              onClick={() =>
                scollToOverview.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "end",
                })
              }
            >
              Overview
            </button>
            <button
              className={Style["curriculum-button"]}
              onClick={() =>
                scollToCurriculum.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "end",
                })
              }
            >
              Curriculum
            </button>
            <button
              className={Style["instructor-button"]}
              onClick={() => scollToInstructor.current.scrollIntoView()}
            >
              Instructor
            </button>
            <button
              className={Style["reviews-button"]}
              onClick={() => scollToReviews.current.scrollIntoView()}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* <div ref={scollToReviews}>scroll Me</div> */}
      </div>
      <div ref={scollToOverview}>
        <Overview courses={courses} />
      </div>

      <div ref={scollToCurriculum}>
        <CourseContent courses={courses.content} />
      </div>
    </>
  );
};

export default ShortCutNavigation;
