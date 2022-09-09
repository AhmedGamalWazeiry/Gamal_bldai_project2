import React, { useState, useEffect } from "react";
import { getData } from "./components/ExtractData";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import CoursePage from "./components/CoursePage/CoursePage";

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
      <Routes>
        <Route path="/" element={<HomePage courses={courses} />} />
        <Route
          path="/course/:courseTitle"
          element={<CoursePage courses={courses} />}
        />
      </Routes>
    </div>
  );
}

export default App;
