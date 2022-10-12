import covid19 from "../assets/images/covid19.png";
import "animate.css";
import React, { useState } from "react";

function Covid19() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="covid19">
      <h3 className="projectTitle">
        Covid-19 World Map
        <br />
        (Thesis)
      </h3>
      <a
        className="projectIcon"
        href="http://covid19worldmap2.eu-central-1.elasticbeanstalk.com/"
      >
        <img className="covid19" src={covid19} alt="Covid19"></img>
      </a>
      <div>
        <p className="projectDescription">
          An interactive world map
          <br /> That shows the covid-19 cases of each country by color
          <br /> Of each picked date.
        </p>
        <button className="expandBtn" onClick={handleClick}>
          {showMore ? "Less Info!" : "More Info!"}
        </button>
        <div style={{ visibility: showMore ? "visible" : "hidden" }}>
          <p>
            Tech used:
            <br />
            HTML, Css, Javascript, SQL, jQuery, Ajax, Node.js, Express
          </p>
        </div>
      </div>
    </div>
  );
}

export default Covid19;
