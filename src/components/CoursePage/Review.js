import React, { useState, useRef } from "react";
import { SetStars } from "../helperFunctions";
import Style from "./Review.module.css";
const parse = require("html-react-parser");
const Review = ({ review }) => {
  const [feedback, setFeedback] = useState("Was");
  const likeRef = useRef(null);
  const dislikeRef = useRef(null);
  const handleLikeButton = () => {
    if (feedback === "Thank") {
      if (likeRef.current.className.includes("liked")) {
        likeRef.current.className = Style["like-dislike-button"];
        setFeedback("Was");
      } else {
        likeRef.current.className = Style["like-dislike-button-liked"];
        dislikeRef.current.className = Style["like-dislike-button"];
      }
    } else {
      likeRef.current.className = Style["like-dislike-button-liked"];
      setFeedback("Thank");
    }
  };
  const handledisLikeButton = () => {
    if (feedback === "Thank") {
      if (dislikeRef.current.className.includes("liked")) {
        dislikeRef.current.className = Style["like-dislike-button"];
        setFeedback("Was");
      } else {
        dislikeRef.current.className = Style["like-dislike-button-liked"];
        likeRef.current.className = Style["like-dislike-button"];
      }
    } else {
      dislikeRef.current.className = Style["like-dislike-button-liked"];
      setFeedback("Thank");
    }
  };

  return (
    <div className={Style["comment"]}>
      <div className={Style["user-comment-icon"]}>{review.user.initials}</div>
      <div className={Style["user-comment-box"]}>
        <div className={Style["user-name"]}>
          {review.user.public_display_name}
        </div>
        <div className={Style["user-rating-time-since"]}>
          <div className={Style["user-rating"]}>{SetStars(review.rating)}</div>
          <div className={Style["comment-time-since"]}>
            {review.created_formatted_with_time_since}
          </div>
        </div>
        <div className={Style["user-comment"]}>
          {parse(review.content_html)}
        </div>
        <div className={Style["feedback-question"]}>
          {feedback} this review helpful?
        </div>
        <div className={Style["likes-button-report"]}>
          <button
            className={Style["like-dislike-button"]}
            ref={likeRef}
            onClick={handleLikeButton}
          >
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <button
            className={Style["like-dislike-button"]}
            ref={dislikeRef}
            onClick={handledisLikeButton}
          >
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <a href="#">Report</a>
        </div>
      </div>
    </div>
  );
};

export default Review;
