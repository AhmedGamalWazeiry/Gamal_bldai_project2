import React, { useRef, useState, useEffect } from "react";
import Style from "./ReviewComponent.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { SetStars } from "../helperFunctions";
import Review from "./Review";

let search = "";
let ratingPercentageList = [];
let ratingPercentageMap = new Map();

const ReviewComponent = ({ reviews }) => {
  const closeButtonRef = useRef(null);
  const StarsRefList = useRef([]);
  const seeMoreRef = useRef(null);
  const selctingFormRef = useRef(null);
  const [ratingPercentageListLength, setRatingPercentageListLength] =
    useState(0);
  const [seeMore, setSeeMore] = useState(5);
  const [rate, setRate] = useState(6);
  const [renderSearch, setRenderSearch] = useState(false);
  StarsRefList.current = [];

  useEffect(() => {
    ratingPercentageList = [];
    ratingPercentageMap.clear();
    calculatePercentage();
  }, [ratingPercentageListLength]);

  function calculatePercentage() {
    if (reviews == undefined) return;
    const review = reviews;
    for (let i = 1; i <= 5; i++) {
      ratingPercentageMap.set(i, 0);
    }
    for (let i = 0; i < review.length; i++) {
      const rate = Math.ceil(review[i].rating);
      const usersNumber = ratingPercentageMap.get(rate);
      ratingPercentageMap.set(rate, usersNumber + 1);
    }
    for (let i = 1; i <= 5; i++) {
      const rating = ratingPercentageMap.get(i) / review.length;
      ratingPercentageList.push(Math.floor(rating * 100));
    }
    setRatingPercentageListLength(ratingPercentageList.length);
  }

  const setStarsReferences = (ref) => {
    if (ref && !StarsRefList.current.includes(ref))
      StarsRefList.current.push(ref);
  };
  function displayAllReviews() {
    if (reviews === undefined) return [];
    let reviewsListLength = reviews.length;
    const reviewsList = [];
    let filterdList = [];
    for (let i = 0; i < reviewsListLength; i++) {
      if (
        reviews[i].content.includes(search) &&
        (Math.ceil(reviews[i].rating) === rate || rate === 6)
      )
        filterdList.push(<Review key={i} review={reviews[i]} />);
    }
    reviewsListLength = Math.min(filterdList.length, seeMore);
    if (filterdList.length < seeMore) {
      seeMoreRef.current.className = Style["see-more-button-hide"];
    }
    for (let i = 0; i < reviewsListLength; i++) {
      reviewsList.push(filterdList[i]);
    }
    return reviewsList;
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    seeMoreRef.current.className = Style["see-more-button"];
    setSeeMore(5);
    setRenderSearch(!renderSearch);
  };
  const handleSeeMoreButton = () => {
    setSeeMore((prev) => prev + 5);
    if (seeMore >= reviews.length) {
    }
  };
  const handleChangeOptions = (e) => {
    const ratingNumber = e.target.value;
    setRate(5 - parseInt(ratingNumber));
    seeMoreRef.current.className = Style["see-more-button"];
    if (ratingNumber === "-1") {
      for (let i = 0; i <= 4; i++) {
        StarsRefList.current[i].className = Style["bar-star-link"];
      }
    } else {
      for (let i = 0; i <= 4; i++) {
        StarsRefList.current[i].className = Style["bar-star-link-show"];
      }
      for (let i = 0; i <= 4; i++) {
        const id = i + "";
        if (id === ratingNumber) continue;
        StarsRefList.current[i].className = Style["bar-star-link-hide"];
      }
    }
  };
  const handleProgressBar = (ref) => {
    let ratingNumber;
    if (ref.className.includes("show")) {
      for (let i = 0; i <= 4; i++) {
        StarsRefList.current[i].className = Style["bar-star-link"];
      }
      selctingFormRef.current.value = "-1";
      setRate(6);
    } else {
      for (let i = 0; i <= 4; i++) {
        if (ref === StarsRefList.current[i]) {
          ref.className = Style["bar-star-link-show"];
          ratingNumber = i;
        } else StarsRefList.current[i].className = Style["bar-star-link-hide"];
      }
      setRate(5 - ratingNumber);
      selctingFormRef.current.value = ratingNumber + "";
    }

    seeMoreRef.current.className = Style["see-more-button"];
  };
  const handleChangeSearchBar = (e) => {
    search = e.target.value;
    search.length
      ? (closeButtonRef.current.className = Style["close-button"])
      : (closeButtonRef.current.className = Style["close-button-hide"]);
  };
  const handleOnClickClose = () => {
    search = "";
    setRenderSearch(!renderSearch);
    setSeeMore(5);
    closeButtonRef.current.className = Style["close-button-hide"];
    seeMoreRef.current.className = Style["see-more-button"];
  };
  return (
    <div className={Style["student-feedback"]}>
      <h1 className={Style["title"]}>Student feedback</h1>
      <div className={Style["review"]}>
        <div className={Style["rating-total"]}>
          <h1>{4.4}</h1>
          <div className={Style["stars-total"]}>{SetStars(4.5)}</div>
          <h2>Course Rating</h2>
        </div>
        <div>
          <button
            className={Style["bar-star-link"]}
            ref={setStarsReferences}
            onClick={() => {
              handleProgressBar(StarsRefList.current[0]);
            }}
          >
            <div className={Style["bar-link"]}>
              <ProgressBar now={ratingPercentageList[4]} />
            </div>
            <div className={Style["stars"]}>{SetStars(5)}</div>
            <div className={Style["percent-number"]}>
              <span>{ratingPercentageList[4]}%</span>
            </div>
            <div className={Style["close-button-stars"]}>
              <img
                src={require("../../images/close-button.png")}
                alt="close-button"
              />
            </div>
          </button>
          <button
            className={Style["bar-star-link"]}
            ref={setStarsReferences}
            onClick={() => {
              handleProgressBar(StarsRefList.current[1]);
            }}
          >
            <div className={Style["bar-link"]}>
              <ProgressBar now={ratingPercentageList[3]} />
            </div>
            <div className={Style["stars"]}>{SetStars(4)}</div>
            <div className={Style["percent-number"]}>
              <span>{ratingPercentageList[3]}%</span>
            </div>
            <div className={Style["close-button-stars"]}>
              <img
                src={require("../../images/close-button.png")}
                alt="close-button"
              />
            </div>
          </button>

          <button
            className={Style["bar-star-link"]}
            ref={setStarsReferences}
            onClick={() => {
              handleProgressBar(StarsRefList.current[2]);
            }}
          >
            <div className={Style["bar-link"]}>
              <ProgressBar now={ratingPercentageList[2]} />
            </div>
            <div className={Style["stars"]}>{SetStars(3)}</div>
            <div className={Style["percent-number"]}>
              <span>{ratingPercentageList[2]}%</span>
            </div>
            <div className={Style["close-button-stars"]}>
              <img
                src={require("../../images/close-button.png")}
                alt="close-button"
              />
            </div>
          </button>

          <button
            className={Style["bar-star-link"]}
            ref={setStarsReferences}
            onClick={() => {
              handleProgressBar(StarsRefList.current[3]);
            }}
          >
            <div className={Style["bar-link"]}>
              <ProgressBar now={ratingPercentageList[1]} />
            </div>
            <div className={Style["stars"]}>{SetStars(2)}</div>
            <div className={Style["percent-number"]}>
              <span>{ratingPercentageList[1]}%</span>
            </div>
            <div className={Style["close-button-stars"]}>
              <img
                src={require("../../images/close-button.png")}
                alt="close-button"
              />
            </div>
          </button>

          <button
            className={Style["bar-star-link"]}
            ref={setStarsReferences}
            onClick={() => {
              handleProgressBar(StarsRefList.current[4]);
            }}
          >
            <div className={Style["bar-link"]}>
              <ProgressBar now={ratingPercentageList[0]} />
            </div>
            <div className={Style["stars"]}>{SetStars(1)}</div>
            <div className={Style["percent-number"]}>
              <span>{ratingPercentageList[0]}%</span>
            </div>
            <div className={Style["close-button-stars"]}>
              <img
                src={require("../../images/close-button.png")}
                alt="close-button"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={Style["search-content"]}>
        <form
          id="fo"
          className={Style["search-bar"]}
          onSubmit={handleSubmitForm}
        >
          <input
            type="text"
            placeholder="Search reviews"
            className={Style["search-box"]}
            onChange={handleChangeSearchBar}
          />
          <button
            type="reset"
            value="Reset"
            className={Style["close-button-hide"]}
            ref={closeButtonRef}
            onClick={handleOnClickClose}
          >
            <img
              src={require("../../images/close-button.png")}
              alt="close-button"
            />
          </button>
          <button type="submit" className={Style["submit-button"]}>
            <i
              className="fa fa-search"
              aria-hidden="true"
              id="search-button"
            ></i>
          </button>
        </form>
        <div className={Style["search-selects"]}>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={handleChangeOptions}
              ref={selctingFormRef}
            >
              <option defaultValue value="-1">
                All ratings
              </option>
              <option value="0">Five stars</option>
              <option value="1">Four stars</option>
              <option value="2">Three stars</option>
              <option value="3">Two stars</option>
              <option value="4">one stars</option>
            </select>
          </div>
        </div>
      </div>
      <div className={Style["user-review"]}>{displayAllReviews()}</div>
      <button
        className={Style["see-more-button"]}
        ref={seeMoreRef}
        onClick={handleSeeMoreButton}
      >
        See more reviews
      </button>
    </div>
  );
};

export default ReviewComponent;
