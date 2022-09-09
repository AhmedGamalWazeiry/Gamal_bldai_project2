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
const CourseContent = ({ content }) => {
  const [collapseState, setCollapseState] = useState("Expand");
  const [sectionsNumbers, setSectionsNumbers] = useState(10);
  const [seeMoreDescriptionButton, setSeeMoreDescriptionButton] =
    useState("more");
  const [textLimit, setTextLimit] = useState(800);
  const refImage = useRef(null);
  const refDescription = useRef(null);
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
    if (content === undefined) return [];

    return (
      <div className={Style["course-details"]}>
        <div className={Style["details"]}>
          <span>
            {content.curriculum_context.data.num_of_published_lectures} lectures
            •
          </span>

          <span>
            {content.curriculum_context.data.sections.length} sections •
          </span>

          <span>
            {convertTime(
              content.curriculum_context.data.estimated_content_length_text
            )}
            total length
          </span>
        </div>
        <div className={Style["expand-collapse-button-box"]}>
          <button
            className={Style["expand-collapse-button"]}
            onClick={() => {
              expnadAllOrCollapseAll(
                content.curriculum_context.data.sections.length
              );
            }}
          >
            {collapseState} all sections
          </button>
        </div>
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
    if (content == undefined) return [];
    let lists = [];
    if (sectionsNumbers > content.curriculum_context.data.sections.length) {
      setSectionsNumbers(content.curriculum_context.data.sections.length);
      return [];
    }

    for (let i = 0; i < sectionsNumbers; i++) {
      const section = content.curriculum_context.data.sections[i];
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
            <div className={Style["image-box"]}>
              <img
                src={require("../../images/arrow-collapse.png")}
                alt="arrow-collapse"
                className={Style["image"]}
                ref={setImagesReferences}
              />
            </div>

            <span className={Style["lectures-title"]}>{section.title}</span>
            <div className={Style["lectures-details"]}>
              <span className={Style["lectures-count"]}>
                {section.lecture_count}
              </span>
              <span className={Style["lectures-time"]}>
                {"lectures •  " + convertTime(section.content_length_text)}
              </span>
            </div>
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
    if (content == undefined) return [];
    if (content.curriculum_context.data.sections.length > 10 && !seeMore)
      return (
        <button
          className={Style["see-more-button"]}
          onClick={handleSeeMoreButton}
        >
          {content.curriculum_context.data.sections.length - 10} more sections
        </button>
      );
  }
  const handleSeeMoreButton = () => {
    setSectionsNumbers(content.curriculum_context.data.sections.length);
    setSeeMore(true);
  };
  const handleSeeMoreDescriptionButton = () => {
    if (seeMoreDescriptionButton === "more") {
      refImage.current.className = Style["image-collapse"];
      refDescription.current.className = Style["description-more"];
      setSeeMoreDescriptionButton("less");
      setTextLimit(content.details.description.length);
    } else {
      refImage.current.className = Style["image-expand"];
      refDescription.current.className = Style["description-content"];
      setSeeMoreDescriptionButton("more");
      setTextLimit(800);
    }
  };
  const getRequirements = () => {
    if (content === undefined) return [];
    let requirementsList = [];
    for (let i = 0; i < content.details.Requirements.length; i++) {
      requirementsList.push(<li key={i}>{content.details.Requirements[i]}</li>);
    }
    return (
      <div className={Style["requirements"]}>
        <h1>Requirements</h1>
        <ul>{requirementsList}</ul>
      </div>
    );
  };
  const getDescription = () => {
    if (content === undefined) return [];
    return (
      <div className={Style["description-box"]}>
        <h1>Description</h1>
        <div ref={refDescription} className={Style["description-content"]}>
          {content.details.description.substring(0, textLimit)}
        </div>
        <button
          onClick={handleSeeMoreDescriptionButton}
          className={Style["more-less-buttton"]}
        >
          Show {seeMoreDescriptionButton}
          <img
            src={require("../../images/arrow-collapse-colored.png")}
            alt="arrow-collapse"
            className={Style["image-expand"]}
            ref={refImage}
          />
        </button>
      </div>
    );
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
      {getRequirements()}
      {getDescription()}
    </div>
  );
};

export default CourseContent;
