import React from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = ({ rating }) => {
  if (rating < 1) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStarHalfAlt} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }
  if (rating === 1) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating > 1 && rating < 2) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStarHalfAlt} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating === 2) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating > 2 && rating < 3) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStarHalfAlt} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }
  if (rating === 3) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating > 3 && rating < 4) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStarHalfAlt} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating === 4) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "dedfe0" }} icon={faStar} />
      </div>
    );
  }

  if (rating > 4 && rating < 5) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStarHalfAlt} />
      </div>
    );
  }

  if (rating === 5) {
    return (
      <div>
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
        <FontAwesomeIcon style={{ color: "#f4c150" }} icon={faStar} />
      </div>
    );
  }
};

export default Ratings;
