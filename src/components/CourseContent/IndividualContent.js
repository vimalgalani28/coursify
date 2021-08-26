import {
  faChevronDown,
  faChevronUp,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const IndividualContent = ({ module, content, handleOpen }) => {
  const [open, setOpen] = useState(false);

  var moduleDuration = 0;
  content.forEach(
    ({ duration }) => (moduleDuration = moduleDuration + duration)
  );
  return (
    <div className="individual-content">
      <div
        className="flex items-center gap-x-2 paragraph1 bold module py-3 px-6"
        style={{
          borderBottom: open ? "1px solid #cec0fc" : "0px",
        }}
      >
        {!open && (
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => setOpen(true)}
            className="course-icon"
          />
        )}
        {open && (
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={() => setOpen(false)}
            className="course-icon"
          />
        )}
        <p className="flex-1">{module.title}</p>
        <p>{parseFloat(moduleDuration).toFixed(2)} sec</p>
      </div>
      {open && (
        <div className="flex flex-col gap-y-3 py-3 ">
          {content.map((video) => (
            <div
              key={video._id}
              className="px-6 flex items-center gap-x-2 paragraph2 light"
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="course-icon"
                onClick={() => handleOpen(video._id)}
              />
              <p
                className="flex-1 course-link"
                onClick={() => handleOpen(video._id)}
              >
                {video.title}
              </p>
              <p>{video.duration} sec</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndividualContent;
