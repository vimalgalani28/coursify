import React from "react";
import "./course-description.css";

const CourseDescription = ({ description }) => {
  return (
    <div className="course-description">
      <p className="heading5 bold mb-3">Course Description</p>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default CourseDescription;
