import React, { useState, useRef } from "react";
import Style from "./Instructor.module.css";

const Instructor = ({ instructor }) => {
  const [seeMoreButton, setSeeMoreButton] = useState("more");
  const [textLimit, setTextLimit] = useState(800);
  const refImage = useRef(null);
  const refDescription = useRef(null);
  const handleSeeMoreButton = () => {
    if (seeMoreButton === "more") {
      refImage.current.className = Style["image-collapse"];
      refDescription.current.className = Style["description-more"];
      setSeeMoreButton("less");
      setTextLimit(instructor.description.length);
    } else {
      refImage.current.className = Style["image-expand"];
      refDescription.current.className = Style["description"];
      setSeeMoreButton("more");
      setTextLimit(800);
    }
  };

  return (
    <div className={Style["instructor"]}>
      <div className={Style["details-box"]}>
        <div className={Style["details"]}>
          <div className={Style["titles"]}>
            <h1>
              <a href="#">{instructor.display_name}</a>
            </h1>
            <h2>{instructor.job_title}</h2>
          </div>
          <div className={Style["instructor-info"]}>
            <img
              src={instructor.image_100x100}
              alt="instructor-photo"
              className={Style["instructor-photo"]}
              ref={refImage}
            />
            <ul>
              <li>
                <span className={Style["item-icon"]}>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span className={Style["item-text"]}>{instructor.rating}</span>
              </li>
              <li>
                <span className={Style["item-icon"]}>
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                </span>
                <span className={Style["item-text"]}>{instructor.reviews}</span>
              </li>
              <li>
                <span className={Style["item-icon"]}>
                  <i className="fa fa-users" aria-hidden="true"></i>
                </span>
                <span className={Style["item-text"]}>
                  {instructor.students}
                </span>
              </li>
              <li>
                <span className={Style["item-icon"]}>
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </span>
                <span className={Style["item-text"]}>{instructor.courses}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={Style["description-box"]}>
        <div ref={refDescription} className={Style["description"]}>
          {instructor.description.substring(0, textLimit)}
        </div>
        <button
          onClick={handleSeeMoreButton}
          className={Style["more-less-buttton"]}
        >
          Show {seeMoreButton}
          <img
            src={require("../images/arrow-collapse-colored.png")}
            alt="arrow-collapse"
            className={Style["image-expand"]}
            ref={refImage}
          />
        </button>
      </div>
    </div>
  );
};

export default Instructor;
