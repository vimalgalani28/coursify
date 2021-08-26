import { faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./preview-model.css";

const PreviewModel = ({ courseContent, handleClose, activeId }) => {
  const activeCourse = courseContent.find((single) => single._id === activeId);
  const [content, setContent] = useState(
    activeCourse !== undefined ? activeCourse : courseContent[0]
  );

  return (
    <div className="preview-model flex items-center justify-center">
      <div className="flex flex-col gap-y-3">
        <div className="px-6 py-3">
          <div className="heading6 bold flex items-center gap-x-2 mb-3">
            <p className="flex-1">{content.title}</p>
            <div onClick={handleClose} className="close">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <video controls poster={content.thumbnail}>
            <source src={content.video} type="video/mp4" />
          </video>
        </div>
        <div className="py-3 video-list">
          {courseContent.map((video) => (
            <div
              key={video._id}
              className={`px-6 py-2 flex items-center gap-x-2 video-item ${
                content._id === video._id ? "active" : ""
              }`}
              onClick={() => setContent(video)}
            >
              <FontAwesomeIcon icon={faPlayCircle} />
              <p className="flex-1">{video.title}</p>
              <p>{video.duration} sec</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewModel;
