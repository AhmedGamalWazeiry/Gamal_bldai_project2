import React, { useRef, useState, useEffect } from "react";
import Style from "./CourseContent.module.css";

function convertTime(time) {
  let relpaced;
  if (time.length === 8) {
    relpaced = time.substring(0, 2) + "h " + time.substring(3, 5) + "m";
    if (relpaced[0] === "0") relpaced = relpaced.substring(1, relpaced.length);
    if (relpaced[3] === "0")
      relpaced =
        relpaced.substring(0, 3) + relpaced.substring(4, relpaced.length);
  } else {
    relpaced = time.substring(0, 2);
    let timeInt = parseInt(relpaced);
    if (time[3] != "0" || time[4] != "0") timeInt++;
    relpaced = timeInt + "min";
  }

  return relpaced;
}
const CourseContent = ({ courses }) => {
  const [collapseState, setCollapseState] = useState("Expand");
  const [sectionsNumbers, setsectionsNumbers] = useState(10);

  const [seeMore, setSeeMore] = useState(false);
  const refSectionsList = useRef([]);
  const refImagesList = useRef([]);
  refSectionsList.current = [];
  refImagesList.current = [];

  function expnadAllOrCollapseAll(sectionsLength) {
    if (collapseState === "Expand") {
      setCollapseState("Collapse");
      for (let i = 0; i < sectionsLength; i++) {
        refSectionsList.current[i].className = Style["show"];
        refImagesList.current[i].className = Style["image-collapse"];
      }
    } else {
      setCollapseState("Expand");
      for (let i = 0; i < sectionsLength; i++) {
        refSectionsList.current[i].className = Style["hide"];
        refImagesList.current[i].className = Style["image-expand"];
      }
    }
  }

  function displayDetails() {
    if (courses == undefined) return [];

    return (
      <div className={Style["course-details"]}>
        <div className={Style["details"]}>
          <span>
            {courses.get("394676").num_of_published_lectures} lectures
          </span>
          <div className={Style["point"]}>.</div>
          <span> {courses.get("394676").sections.length} sections </span>
          <div className={Style["point"]}>.</div>
          <span>
            {convertTime(courses.get("394676").estimated_content_length_text)}
            total length
          </span>
        </div>
        <button
          className={Style["expand-collapse-button"]}
          onClick={() => {
            expnadAllOrCollapseAll(courses.get("394676").sections.length);
          }}
        >
          {collapseState} all sections
        </button>
      </div>
    );
  }

  function getLectures(section) {
    const sectionLen = section.items.length;
    let lists = [];
    for (let i = 0; i < sectionLen; i++) {
      let icon = "";
      let preview = "";
      let classTitle = "";
      section.items[i].video_asset_id
        ? (icon = "fa fa-play-circle")
        : (icon = "fa fa-file-o");
      if (section.items[i].can_be_previewed) {
        preview = "Preview";
      } else classTitle = "not-link";

      lists.push(
        <ul key={i} className={Style["lectures-lists"]}>
          <li>
            <i className={icon} aria-hidden="true"></i>

            <a className={Style[classTitle]} href="#">
              <span className={Style["lecture-title"]}>
                {section.items[i].title}
              </span>
              <span>{preview}</span>
            </a>
            <span className={Style["lecture-time"]}>
              {section.items[i].content_summary}
            </span>
          </li>
        </ul>
      );
    }
    return lists;
  }

  const collapseAndExpand = (refToSections, refToImages) => {
    const textClassName = refToSections.className;
    if (textClassName.includes("show")) {
      refToSections.className = Style["hide"];
      refToImages.className = Style["image-expand"];
    } else {
      refToSections.className = Style["show"];
      refToImages.className = Style["image-collapse"];
    }
  };
  const setSectionsReferences = (ref) => {
    if (ref && !refSectionsList.current.includes(ref))
      refSectionsList.current.push(ref);
  };
  const setImagesReferences = (ref) => {
    if (ref && !refImagesList.current.includes(ref))
      refImagesList.current.push(ref);
  };
  function getLists() {
    if (courses == undefined) return [];
    let lists = [];
    if (sectionsNumbers > courses.get("394676").sections.length)
      sectionsNumbers = courses.get("394676").sections.length;
    for (let i = 0; i < sectionsNumbers; i++) {
      const section = courses.get("394676").sections[i];
      const id = "index" + i;
      lists.push(
        <div key={i} className={Style["sections"]}>
          <button
            className={Style["section-title"]}
            onClick={() =>
              collapseAndExpand(
                refSectionsList.current[i],
                refImagesList.current[i]
              )
            }
          >
            <img
              src={require("../images/arrow-collapse.png")}
              alt="arrow-collapse"
              className={Style["image"]}
              ref={setImagesReferences}
            />
            <span className={Style["lectures-title"]}>{section.title}</span>
            <span className={Style["lectures-count"]}>
              {section.lecture_count} lectures
            </span>
            <div className={Style["point-lectures"]}>.</div>
            <span className={Style["lectures-time"]}>
              {convertTime(section.content_length_text)}
            </span>
          </button>
          <div className={Style["hide"]} ref={setSectionsReferences}>
            {getLectures(section)}
          </div>
        </div>
      );
    }
    return lists;
  }
  function seeMoreButton() {
    if (courses == undefined) return [];
    if (courses.get("394676").sections.length > 10 && !seeMore)
      return (
        <button
          className={Style["see-more-button"]}
          onClick={handleSeeMoreButton}
        >
          {courses.get("394676").sections.length - 10} more sections
        </button>
      );
  }
  const handleSeeMoreButton = () => {
    setsectionsNumbers(courses.get("394676").sections.length);
    setSeeMore(true);
  };
  return (
    <div className={Style["content-container"]}>
      <div className={Style["top-container-box"]}>
        <div className={Style["top-container"]}>
          <h1>Course content</h1>
          {displayDetails()}
        </div>
      </div>
      <div className={Style["sections-box"]}>{getLists()}</div>
      {seeMoreButton()}
    </div>
  );
};

export default CourseContent;
