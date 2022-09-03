import React, { useState, useEffect } from "react";
import "./App.css";
import Billboard from "./components/Billboard";
import CoursesList from "./components/CoursesList";
import CoursesTabs from "./components/CoursesTabs";
import TopContainerCourse from "./components/TopContainerCourse";
import { getDescription, getTitle } from "./components/db";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import TopCategories from "./components/TopCategories";
import SideBarCourse from "./components/SideBarCourse";
import TopBar from "./components/TopBar";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((res) => {
        setCourses(res);
      });
  }, []);

  // Get array of courses from db.js file.
  // Get  courses List Description  from db.js file.
  const coursesDescription = getDescription();

  // Get courses List Title from db.js file.
  const coursesTitle = getTitle();

  return (
    <div className="App">
      <TopBar />
      <NavigationBar />
      <TopContainerCourse coursesList={courses} />
    </div>
  );
}

export default App;
