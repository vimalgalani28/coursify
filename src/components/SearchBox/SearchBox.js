import React from "react";
import "./search-box.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBox = () => {
  return (
    <div className="flex flex-col py-6 px-6 search-box md:mx-0 xs:mx-auto">
      <p className="heading3 bold search-title mb-2">Learning that gets you</p>
      <p className="paragraph1 light search-subtitle">
        Skills for your present (and your future). Get started with us.
      </p>
      <div className="flex items-center mt-4">
        <input
          className="flex-1 py-4 px-4 search-input"
          placeholder="What do you want to learn?"
        />
        <div className="py-4 px-4 search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
