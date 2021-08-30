import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CoursifyContext } from "./context/CoursifyContext";
import courseReducer from "./reducers/courseReducer";
import lectureReducer from "./reducers/lecture";
import moduleReducer from "./reducers/moduleReducer";
import "./styles/global.css";

const Jsx = () => {
  const [courses, dispatchCourses] = useReducer(courseReducer, []);
  const [modules, dispatchModules] = useReducer(moduleReducer, []);
  const [lectures, dispatchLectures] = useReducer(lectureReducer, []);
  return (
    <CoursifyContext.Provider
      value={{
        courses,
        dispatchCourses,
        lectures,
        dispatchLectures,
        modules,
        dispatchModules,
      }}
    >
      <App />
    </CoursifyContext.Provider>
  );
};

ReactDOM.render(<Jsx />, document.getElementById("root"));
