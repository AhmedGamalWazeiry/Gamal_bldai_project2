function getCourses() {
  const coursesList = [
    {
      id: 1,
      link: "https://www.udemy.com/course/pythonforbeginners/",
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "E£679.99",
      rating: 4.4,
      people: "(2948)",
    },
    {
      id: 2,
      link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "E£1599.99",
      rating: 2.4,
      people: "(17999)",
    },
    {
      id: 3,
      link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding FAcutly Solutaions",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "E£679.99",
      rating: 1.4,
      people: "(1781)",
    },
    {
      id: 4,
      link: "https://www.udemy.com/course/learn-python/",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      price: "E£319.99",
      rating: 2,
      people: "(2.773)",
    },
    {
      id: 5,
      link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      price: "E£519.99",
      rating: 5,
      people: "(2930)",
    },
  ];
  return coursesList;
}
function getDescription() {
  return "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...";
}
function getTitle() {
  return "Expand your career opportunities with Python";
}

export { getCourses, getDescription, getTitle };
