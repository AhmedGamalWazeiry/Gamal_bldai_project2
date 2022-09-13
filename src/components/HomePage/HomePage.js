import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";
import Billboard from "./Billboard";
import CoursesList from "./CoursesList";
import CoursesTabs from "./CoursesTabs";
import TopCategories from "./TopCategories";

const HomePage = ({ courses }) => {
  return (
    <>
      <Billboard />
      <CoursesTabs />
      <CoursesList
        coursesList={courses.courses}
        coursesDescription={courses.coursesDescription}
        coursesTitle={courses.coursesTitle}
      />
      <TopCategories />
      <Footer />
    </>
  );
};

export default HomePage;
