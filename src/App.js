import React, { useState, useEffect } from "react";
import "./App.css";
import Billboard from "./components/Billboard";
import CoursesList from "./components/CoursesList";
import CoursesTabs from "./components/CoursesTabs";
import TopContainerCourse from "./components/TopContainerCourse";
import { getData } from "./components/ExtractData";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import TopCategories from "./components/TopCategories";
import SideBarCourse from "./components/SideBarCourse";
import TopBar from "./components/TopBar";
import ShortCutNavigation from "./components/ShortCutNavigation";
import Overview from "./components/Overview";
import CourseContent from "./components/CourseContent";
import Test from "./components/Test";

function App() {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/content")
      .then((res) => res.json())
      .then((res) => {
        setCourses(getData(res));
      });
  }, []);

  return (
    <div className="App">
      <TopBar />
      <NavigationBar />
      <TopContainerCourse coursesList={courses} />
      <ShortCutNavigation />
      <Overview courses={courses} />
      <CourseContent courses={courses.content} />
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
