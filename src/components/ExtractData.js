const reviews = new Map();
const content = new Map();

// Get  courses List Description  from db.js file.

// Get courses List Title from db.js file.

function getData(allData) {
  const data = allData.data.python_res;
  const coursesDescription = data.description;
  const coursesTitle = data.title;
  const courses = data.items;
  for (let i = 0; i < 4; i++) {
    const id = courses[i].id.toString();
    // console.log(id);
    reviews.set(id + "r", allData[id + "r"].results);
    content.set(id, allData[id].curriculum_context.data);
  }
  return { coursesDescription, coursesTitle, courses, reviews, content };
}
export { getData };
