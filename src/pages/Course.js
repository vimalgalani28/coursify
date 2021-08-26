import React, { useContext, useEffect, useState } from "react";
import CourseContent from "../components/CourseContent/CourseContent";
import CourseHeader from "../components/Header/CourseHeader";
import JumboCourse from "../components/JumboCourse/JumboCourse";
import LearningOutcome from "../components/LearningOutcome/LearningOutcome";
import PreviewModel from "../components/PreviewModel/PreviewModel";
import { CoursifyContext } from "../context/CoursifyContext";

const modules = [
  {
    _id: "module1",
    title: "Install Python on your machine",
  },
  {
    _id: "module2",
    title: "Run Python on your machine",
  },
  {
    _id: "module3",
    title: "Python Data Types",
  },
  {
    _id: "module4",
    title: "Looping Statements",
  },
  {
    _id: "module5",
    title: "Conditional Statements",
  },
];

const courseContent = [
  {
    _id: "content1",
    title: "Installing python3 on your macine",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content2",
    title: "Installing PyCharm on your machine",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content3",
    title: "Configuring Jupyter Notebook",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content4",
    title: "Running our first python code.",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content5",
    title: "Number Data Type",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content6",
    title: "Boolean Data Type",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content7",
    title: "Strings In python",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content8",
    title: "For Loop",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content9",
    title: "While Loop",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: "content10",
    title: "If and Else",
    video:
      "https://drive.google.com/uc?id=19AJPOwsSByPZiHMFbgtHY_L6PZEK0muV&export=download",
    thumbnail:
      "https://drive.google.com/uc?id=1-ydPhiQYPs21p9J0JD5kv8NYZhWMRpyB&export=download",
    duration: 3.2,
    moduleId: "module5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Course = (props) => {
  const { courses } = useContext(CoursifyContext);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <LearningOutcome />
        </div>
        <div className="my-5">
          <CourseContent
            modules={modules}
            courseContent={courseContent}
            handleOpen={handleOpen}
          />
        </div>
      </div>
      {open && courseContent && courseContent.length !== 0 && (
        <PreviewModel
          courseContent={courseContent}
          handleClose={handleClose}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </>
  );
};

export default Course;
