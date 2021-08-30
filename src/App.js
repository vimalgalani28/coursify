import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoursifyContext } from "./context/CoursifyContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { dispatchCourses } = useContext(CoursifyContext);

  useEffect(() => {
    const fetchCourses = async () => {
      const options = {
        method: "GET",
        url: `http://localhost:5000/courses/`,
      };
      try {
        const res = await axios(options);
        dispatchCourses({
          type: "SET_COURSES",
          courses: res.data.courses,
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchCourses();
  }, [setLoading, dispatchCourses]);

  return !loading ? <AppRouter /> : <p>Loading...</p>;
};

export default App;
