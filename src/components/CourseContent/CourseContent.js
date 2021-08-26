import React from "react";
import IndividualContent from "./IndividualContent";
import "./course-content.css";

const CourseContent = ({ courseContent, modules, handleOpen }) => {
  return (
    <div className="course-content">
      <p className="heading5 bold mb-3">Course Content</p>
      <div className="flex items-center gap-x-2 paragraph1 light mb-2">
        <p>{modules.length} Modules</p>
        <p>{courseContent.length} Videos</p>
      </div>
      <div>
        {modules.map((module) => (
          <div key={module._id}>
            <IndividualContent
              module={module}
              content={courseContent.filter(
                (content) => content.moduleId === module._id
              )}
              handleOpen={handleOpen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
