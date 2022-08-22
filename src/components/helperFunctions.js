import Course from "./Course";

//  This function takes the rating number as a parameter and returns a list of five elements (i)

function SetStars(rating) {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  if (!Number.isInteger(rating)) {
    stars.push(
      <i key={Math.floor(rating)} className="fa fa-star-half-empty"></i>
    );
  }
  for (let i = Math.ceil(rating); i < 5; i++) {
    stars.push(<i key={i} className="fa fa-star-o"></i>);
  }
  return stars;
}

// This function returns a list of Courses components.

function getCoursesComponents(coursesList) {
  let courses = [];
  courses = coursesList.map((course) => (
    <Course key={course.id} course={course} />
  ));
  return courses;
}

export { getCoursesComponents, SetStars };
