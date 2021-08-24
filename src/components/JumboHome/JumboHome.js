import React from "react";
import "./jumbo-home.css";
import SearchBox from "../SearchBox/SearchBox";

const JumboHome = () => {
  return (
    <>
      <div className="jumbo-home">
        <div>
          <img
            src="/background.jpg"
            alt="jumbo"
            className="home-img"
            width="1340"
            height="400"
          />
        </div>
        <div className="search-box-container md:block xs:hidden">
          <SearchBox />
        </div>
      </div>
      <div className="md:hidden xs:block">
        <SearchBox />
      </div>
    </>
  );
};

export default JumboHome;
