import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";
import CourseContent from "./CourseContent";
import InstructorComponent from "./InstructorComponent";
import Overview from "./Overview";
import ReviewComponent from "./ReviewComponent";
import ShortCutNavigation from "./ShortCutNavigation";
import TopContainerCourse from "./TopContainerCourse";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import Brands from "./Brands";

const CoursePage = ({ courses }) => {
  const params = useParams();
  const coursePublishedTitle = params.courseTitle;
  let course;
  if (courses.courses === undefined) return <></>;
  for (let i = 0; i < courses.courses.length; i++) {
    if (courses.courses[i].published_title.includes(coursePublishedTitle)) {
      course = courses.courses[i];
      break;
    }
  }
  const reviews = courses.reviews.get(course.id + "r");
  const content = courses.content.get(course.id);

  return (
    <>
      <TopBar />
      <TopContainerCourse course={course} />
      <ShortCutNavigation course={course} content={content} reviews={reviews} />
      <Brands />
      <Footer />
    </>
  );
};

export default CoursePage;
