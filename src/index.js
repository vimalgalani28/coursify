import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CoursifyContext } from "./context/CoursifyContext";
import courseReducer from "./reducers/courseReducer";
import "./styles/global.css";

const Jsx = () => {
  const [courses, dispatchCourses] = useReducer(courseReducer, []);
  return (
    <CoursifyContext.Provider
      value={{
        courses,
        dispatchCourses,
      }}
    >
      <App />
    </CoursifyContext.Provider>
  );
};

ReactDOM.render(<Jsx />, document.getElementById("root"));
