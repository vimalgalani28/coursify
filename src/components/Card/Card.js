import React from "react";
import "./card.css";
import Ratinings from "../Ratings/Ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Card = ({ course, shoverClass }) => {
  const history = useHistory();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card" onClick={() => history.push(`/course/${course._id}`)}>
      <div className="img-container">
        <img
          className="w-full object-cover h-full"
          src={course.picture}
          alt=""
        />
      </div>
      <div>
        <p className="paragraph1 bold card-title mb-1 mt-2">{course.title}</p>
        <p className="paragraph3 card-subtitle light">{course.author}</p>
        <div className="flex items-center">
          <p className="paragraph2 regular mr-1 rating">{course.rating}</p>
          <Ratinings rating={course.rating} />
          <p className="caption regular count ml-1">({course.ratingCount})</p>
        </div>
      </div>
      <p className="paragraph1 py-1 bold price">
        {numberWithCommas(course.price)}
      </p>
      {course.best && (
        <div className="flex mt-1">
          <p className="bestseller self-start caption regular py-1 px-2">
            Best Seller
          </p>
        </div>
      )}
      <div className={`shover py-5 px-5 mt-1 ${shoverClass}`}>
        <p className="paragraph1 bold">{course.title}</p>
        <p className="caption light">
          Update{" "}
          <span className="caption bold">
            {moment(course.updatedAt).format("MMMM DD")}
          </span>
        </p>
        <p className="paragraph3 light mt-2">{course.description}</p>
        <div className="flex mt-4">
          <button className="flex-1 cart-button mr-2">Add To Cart</button>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
