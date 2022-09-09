import React, { useState } from "react";
import Style from "./PopUpWindow.module.css";
const PopUpWindow = ({ course }) => {
  const [heart, setHeart] = useState("fa fa-heart-o");
  const [isLoading, setIsLoading] = useState(false);
  const handleLikeButton = () => {
    setIsLoading((prev) => !prev);
    setTimeout(() => {
      if (heart === "fa fa-heart") setHeart("fa fa-heart-o");
      else setHeart("fa fa-heart");
      setIsLoading((prev) => !prev);
    }, 1000);
  };
  const displayObjectivesSummary = (items) => {
    let objectiveList = [];
    for (let i = 0; i < items.length; i++) {
      objectiveList.push(
        <li key={i}>
          <span className={Style["item-icon"]}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span className={Style["item-text"]}> {items[i]}</span>
        </li>
      );
    }
    return objectiveList;
  };
  const displayLoader = () => {
    if (isLoading) {
      return (
        <div className={`spinner-border ${Style["loader"]}`} role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return null;
    }
  };
  const displayHeart = () => {
    if (!isLoading) {
      return <i className={heart} aria-hidden="true"></i>;
    } else {
      return null;
    }
  };
  return (
    <div className={Style["pop-up-window"]}>
      <h1>{course.title}</h1>
      <span className={Style["updated"]}>Updated November 2018</span>
      <span className={Style["info"]}>
        {course.content_info} • All Levels • Subtitles
      </span>
      <span className={Style["headline"]}>{course.headline}</span>
      <ul>{displayObjectivesSummary(course.objectives_summary)}</ul>
      <div className={Style["cart-like-box"]}>
        <button className={Style["button-cart"]}>Add to cart</button>
        <button
          className={Style["like-button"]}
          onClick={handleLikeButton}
          disabled={isLoading}
        >
          {displayHeart()}
          {displayLoader()}
        </button>
      </div>
    </div>
  );
};

export default PopUpWindow;
