import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CourseHeader = ({ course }) => {
  return (
    <div className="course-header py-4 px-6 flex flex-col paragraph1 bold mb-1">
      <p>{course.title}</p>
      <div className="flex space-x-2 items-center paragraph2 medium">
        <p className="rating-header">{course.rating}</p>
        <div className="rating-header">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="rating-count-header">({course.ratingCount} ratings)</p>
        <p>1,356,825 Students</p>
      </div>
    </div>
  );
};

export default CourseHeader;
