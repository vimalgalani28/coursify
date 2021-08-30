import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CourseContent from "../components/CourseContent/CourseContent";
import CourseHeader from "../components/Header/CourseHeader";
import JumboCourse from "../components/JumboCourse/JumboCourse";
import LearningOutcome from "../components/LearningOutcome/LearningOutcome";
import PreviewModel from "../components/PreviewModel/PreviewModel";
import { CoursifyContext } from "../context/CoursifyContext";

const Course = (props) => {
  const { courses, dispatchModules, lectures, dispatchLectures } =
    useContext(CoursifyContext);
  const course = courses.find((course) => course._id === props.match.params.id);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState();
  const handleScroll = () => {
    const toggle = document.querySelector(".toggle");
    const sticky = toggle.offsetTop;
    if (window.scrollY >= 50) {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
    if (window.pageYOffset > sticky) {
      toggle.classList.add("sticky");
    } else {
      toggle.classList.remove("sticky");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const fetchContent = async () => {
      const options = {
        method: "GET",
        url: `http://localhost:5000/admin/module/${props.match.params.id}`,
      };
      const newOptions = {
        method: "GET",
        url: `http://localhost:5000/admin/lecture/${props.match.params.id}`,
      };
      try {
        const res = await axios(options);
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          dispatchModules({
            type: "SET_MODULES",
            modules: res.data.modules,
          });
        }
        const res1 = await axios(newOptions);
        console.log(res1);
        if (res1.status === 200 || res1.status === 201) {
          dispatchLectures({
            type: "SET_LECTURES",
            lectures: res1.data.lectures,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchContent();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatchLectures, dispatchModules]);

  const handleOpen = (id) => {
    setActiveId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <div
          style={{
            display: "none",
          }}
          className="toggle"
        >
          <CourseHeader course={course} />
        </div>
        <JumboCourse course={course} handleOpen={handleOpen} />
        <div className="mt-5">
          <LearningOutcome course={course} />
        </div>
        <div className="my-5">
          <CourseContent handleOpen={handleOpen} />
        </div>
      </div>
      {open && lectures && lectures.length !== 0 && (
        <PreviewModel
          courseContent={lectures}
          handleClose={handleClose}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </>
  );
};

export default Course;
