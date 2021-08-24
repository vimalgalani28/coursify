import React, { useEffect, useState } from "react";
import AppSlider from "./components/AppSlider/AppSlider";
import Categories from "./components/Categories/Categories";
import JumboHome from "./components/JumboHome/JumboHome";
import axios from "axios";

const categories = [
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
    title: "Design",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
    title: "Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg",
    title: "Marketing",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg",
    title: "IT and Software",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg",
    title: "Personal Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg",
    title: "Business",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg",
    title: "Photography",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg",
    title: "Music",
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const options = {
        method: "GET",
        url: `http://localhost:5000/course/`,
      };
      try {
        const res = await axios(options);
        setCourses(res.data.courses);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchCourses();
  }, [setLoading, setCourses]);

  return !loading ? (
    <>
      <JumboHome />
      <div className="my-5">
        <AppSlider courses={courses} title="Students Are Viewing" />
      </div>
      <div className="my-5">
        <AppSlider courses={courses} title="Best Seller" />
      </div>
      <div className="my-5">
        <Categories categories={categories} />
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
