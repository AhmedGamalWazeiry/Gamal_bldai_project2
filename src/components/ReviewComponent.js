import React from "react";
import Style from "./ReviewComponent.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { SetStars } from "./helperFunctions";

const ReviewComponent = ({ reviews }) => {
  function display() {
    if (reviews === undefined) return [];
    console.log(reviews.get("394676r")[0]);
  }
  const hey = (e) => {
    console.log(e.target.value);
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
          <button className={Style["bar-star-link"]}>
            <div className={Style["bar-link"]}>
              <ProgressBar now={50} />
            </div>
            <div className={Style["stars"]}>{SetStars(5)}</div>
            <div className={Style["percent-number"]}>
              <span>{"36%"}</span>
            </div>
          </button>
          <button className={Style["bar-star-link"]}>
            <div className={Style["bar-link"]}>
              <ProgressBar now={40} />
            </div>
            <div className={Style["stars"]}>{SetStars(4)}</div>
            <div className={Style["percent-number"]}>
              <span>{"36%"}</span>
            </div>
          </button>

          <button className={Style["bar-star-link"]}>
            <div className={Style["bar-link"]}>
              <ProgressBar now={30} />
            </div>
            <div className={Style["stars"]}>{SetStars(3)}</div>
            <div className={Style["percent-number"]}>
              <span>{"36%"}</span>
            </div>
          </button>

          <button className={Style["bar-star-link"]}>
            <div className={Style["bar-link"]}>
              <ProgressBar now={20} />
            </div>
            <div className={Style["stars"]}>{SetStars(2)}</div>
            <div className={Style["percent-number"]}>
              <span>{"36%"}</span>
            </div>
          </button>

          <button className={Style["bar-star-link"]}>
            <div className={Style["bar-link"]}>
              <ProgressBar now={10} />
            </div>
            <div className={Style["stars"]}>{SetStars(1)}</div>
            <div className={Style["percent-number"]}>
              <span>{"36%"}</span>
            </div>
          </button>
        </div>
      </div>
      <div className={Style["search-content"]}>
        <div className={Style["search-selects"]}>
          <div class="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={hey}
            >
              <option selected value="0">
                All ratings
              </option>
              <option value="5">Five stars</option>
              <option value="4">Four stars</option>
              <option value="3">Three stars</option>
              <option value="2">Two stars</option>
              <option value="1">one stars</option>
            </select>
          </div>
        </div>
        <form id="fo" className={Style["search-bar"]}>
          <input
            type="text"
            placeholder="Search for anything"
            className={Style["search-box"]}
          />
          <button type="submit">
            <i
              className="fa fa-search"
              aria-hidden="true"
              id="search-button"
            ></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewComponent;
