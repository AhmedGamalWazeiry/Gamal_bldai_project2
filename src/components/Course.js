import React, { useRef, useState, useEffect } from "react";
import Style from "./Course.module.css";
import { SetStars } from "./helperFunctions";
import PopUpWindow from "./PopUpWindow";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const navigate = useNavigate();
  const popUpRef = useRef(null);
  const courseRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [styleImage, setStyleImage] = useState("course-img");

  useEffect(() => {
    if (courseRef.current.offsetLeft >= 1000)
      setX(courseRef.current.offsetLeft - 330);
    else setX(courseRef.current.offsetLeft + 230);
    setY(courseRef.current.offsetTop + -50);
  }, []);
  const pointerInside = () => {
    popUpRef.current.className = Style["pop-up-show"];
    setStyleImage("course-img-hide");
  };
  const pointerOutSide = () => {
    popUpRef.current.className = Style["pop-up-hide"];
    setStyleImage("course-img");
  };
  const getInstructors = () => {
    let instructorsList = [];
    for (let i = 0; i < course.visible_instructors.length; i++) {
      instructorsList.push(
        <span>{course.visible_instructors[i].display_name}</span>
      );
      if (i !== course.visible_instructors.length - 1) {
        instructorsList.push(<span>,</span>);
      }
    }
    return instructorsList;
  };
  return (
    <>
      <div
        className={`col ${Style["course"]}`}
        onMouseEnter={pointerInside}
        onMouseLeave={pointerOutSide}
        ref={courseRef}
      >
        <button
          className={Style["course-button"]}
          onClick={() => {
            navigate(course.url);
          }}
        >
          <div className={Style[styleImage]}>
            <img src={course.image_240x135}></img>
          </div>
          <div className={Style["course-body"]}>
            <h4 className={Style["course-title"]}>{course.title}</h4>
            <p className={Style["course-author"]}>{getInstructors()}</p>
            <div className={Style["rating-box"]}>
              <span className={Style["course-rating"]}>
                {Math.ceil(course.rating)}
              </span>
              <div className={Style["course-stars"]}>
                {SetStars(course.rating)}
              </div>
              <span className={Style["course-students"]}>
                ({course.num_subscribers})
              </span>
            </div>
            <h4 className={Style["course-price"]}>{course.price}</h4>
          </div>
        </button>
        <div
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
          }}
          className={Style["pop-up-hide"]}
          ref={popUpRef}
        >
          <PopUpWindow course={course} />
        </div>
      </div>
    </>
  );
};

export default Course;
