import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CoursifyContext } from "./context/CoursifyContext";
import courseReducer from "./reducers/courseReducer";
import lectureReducer from "./reducers/lecture";
import moduleReducer from "./reducers/moduleReducer";
import userReducer from "./reducers/userReducer";
import SnackbarProvider from "react-simple-snackbar";
import "./styles/global.css";

const Jsx = () => {
  const [courses, dispatchCourses] = useReducer(courseReducer, []);
  const [modules, dispatchModules] = useReducer(moduleReducer, []);
  const [lectures, dispatchLectures] = useReducer(lectureReducer, []);
  const [user, dispatchUser] = useReducer(userReducer, {});
  return (
    <SnackbarProvider>
      <CoursifyContext.Provider
        value={{
          courses,
          dispatchCourses,
          lectures,
          dispatchLectures,
          modules,
          dispatchModules,
          user,
          dispatchUser,
        }}
      >
        <App />
      </CoursifyContext.Provider>
    </SnackbarProvider>
  );
};

ReactDOM.render(<Jsx />, document.getElementById("root"));
