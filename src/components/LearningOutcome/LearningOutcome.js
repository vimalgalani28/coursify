import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./learning-outcome.css";

const LearningOutcome = ({ course }) => {
  return (
    <div className="learning-outcome px-6 py-6">
      <p className="heading5 bold mb-2">What You'll learn</p>
      <div className="sm:grid sm:grid-cols-2 gap-x-2 gap-y-4">
        {course.learnings &&
          course.learnings.map((learn) => (
            <div
              className="flex gap-x-3 items-center paragraph2 light"
              key={learn}
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>{learn}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LearningOutcome;
