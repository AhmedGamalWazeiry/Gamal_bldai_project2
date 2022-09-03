import "./App.css";
import CoursesList from "./components/CoursesList";
import { getCourses, getDescription, getTitle } from "./components/db";

function App() {
  // Get array of courses from db.js file.
  const coursesList = getCourses();

  // Get  courses List Description  from db.js file.
  const coursesDescription = getDescription();

  // Get courses List Title from db.js file.
  const coursesTitle = getTitle();

  return (
    <div className="App">
      <CoursesList
        coursesList={coursesList}
        coursesDescription={coursesDescription}
        coursesTitle={coursesTitle}
      />
    </div>
  );
}

export default App;
