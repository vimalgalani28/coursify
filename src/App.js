import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoursifyContext } from "./context/CoursifyContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { dispatchCourses, dispatchUser } = useContext(CoursifyContext);

  useEffect(() => {
    const fetchCourses = async (coursify) => {
      var token = "";
      if (coursify) {
        token = coursify.token;
      }
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API}/courses/`,
      };
      const newOptions = {
        method: "GET",
        url: `${process.env.REACT_APP_API}/admin/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios(options);
        const res1 = await axios(newOptions);
        dispatchCourses({
          type: "SET_COURSES",
          courses: res.data.courses,
        });
        if (res1.data.status === 200) {
          dispatchUser({
            type: "SET_USER",
            user: {
              ...res1.data.admin,
              type: "admin",
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    const coursify = JSON.parse(localStorage.getItem("coursify"));
    fetchCourses(coursify);
  }, [setLoading, dispatchCourses, dispatchUser]);

  return !loading ? <AppRouter /> : <p>Loading...</p>;
};

export default App;
