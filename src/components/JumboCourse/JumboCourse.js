import {
  faHeart,
  faMarker,
  faPlay,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import AppButton from "../Burron/AppButton";
import Ratings from "../Ratings/Ratings";
import "./jumbo-course.css";

const JumboCourse = ({ course, handleOpen }) => {
  return (
    <div className="jumbo-course pb-8 pt-4">
      <div className="lg:grid lg:grid-cols-2 gap-x-10">
        <div>
          <div className="play lg:hidden xs:block" onClick={handleOpen}>
            <img src={course.picture} alt={course.title} />
            <div className="overlay"></div>
            <div className="play-icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p className="play-text paragraph2 bold">Preview this course.</p>
          </div>
          <p className="heading4 bold mb-1">{course.title}</p>
          <p className="sub-heading medium mb-5">{course.description}</p>
          <div className="flex items-center gap-x-2 paragraph2 light mb-2">
            <p className="jumbo-rating">{course.rating}</p>
            <p>
              <Ratings rating={course.rating} />
            </p>
            <p className="jumbo-rating-count">({course.ratingCount} ratings)</p>
            <p>1,325,864 students</p>
          </div>
          <p className="paragraph2 light">
            Created by{" "}
            <span className="jumbo-rating-count">{course.author}</span>
          </p>
          <div className="flex gap-x-2 items-center paragraph2">
            <FontAwesomeIcon icon={faMarker} />
            <p>Last Updated {moment(course.updatedAt).format("M/YYYY")}</p>
          </div>
          <div className="flex items-center gap-x-2 mt-3">
            <AppButton className="btn-outline color-white" borderColor="#fff">
              <span className="flex items-center gap-x-2">
                <span>WishList</span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </AppButton>
            <AppButton className="btn-outline color-white" borderColor="#fff">
              <span className="flex items-center gap-x-2">
                <span>Share</span>
                <FontAwesomeIcon icon={faShare} />
              </span>
            </AppButton>
          </div>
        </div>
        <div className="lg:block xs:hidden">
          <div className="jumbo-card">
            <div className="play" onClick={handleOpen}>
              <img src={course.picture} alt={course.title} />
              <div className="overlay"></div>
              <div className="play-icon">
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <p className="play-text paragraph2 bold">Preview this course.</p>
            </div>
            <div className="flex flex-col gap-y-2 px-3 pb-3 mt-2">
              <button className="cart-button py-2">Add To Cart</button>
              <AppButton className="btn-outline">Buy Now</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCourse;
