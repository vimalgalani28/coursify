import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./slider.css";

const AppSlider = ({ courses, title }) => {
  const [start, setStart] = useState(0);
  const getColumns = (width) => {
    if (width > 1024) {
      return 5;
    } else if (width <= 1024 && width > 768) {
      return 3;
    } else if (width <= 768 && width > 640) {
      return 2;
    } else if (width <= 640 && width > 0) {
      return 1;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      setColumns(getColumns(window.innerWidth));
      setWidth(window.innerWidth);
    });
  }, [setColumns]);

  const getVisible = () => {
    return courses.slice(start, start + columns);
  };

  return (
    <div className="slider">
      <p className="heading5 bold mb-2">{title}</p>
      {courses.length - start >= columns && start + 5 !== courses.length && (
        <div className="next" onClick={() => setStart(start + columns)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
      {start !== 0 && (
        <div className="prev" onClick={() => setStart(start - columns)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      <div className={`carousel-wrapper grid grid-cols-${columns} gap-x-2`}>
        {getVisible(courses).map((course, i) => {
          const req = 0.05 * width + i * (width / columns);
          if (width - req >= 350) {
            return (
              <div key={course._id} className="course">
                <Card course={course} shoverClass="right" />
              </div>
            );
          } else if (req >= 350) {
            return (
              <div key={course._id} className="course">
                <Card course={course} shoverClass="left" />
              </div>
            );
          } else {
            return (
              <div key={course._id} className="course">
                <Card course={course} shoverClass="center" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AppSlider;
