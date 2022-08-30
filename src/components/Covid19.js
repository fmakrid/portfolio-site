import covid19 from "../assets/images/covid19.png";
import "animate.css";

function Covid19() {
  return (
    <div id="covid19">
      <h3 class="projectTitle">
        Covid-19 World Map
        <br />
        (Thesis)
      </h3>

      <p class="projectDescription ">
        An interactive world map
        <br /> That shows the covid-19 cases of each country by color
        <br /> Of each picked date.
      </p>
      <a
        class="projectIcon"
        href="http://covid19worldmap2.eu-central-1.elasticbeanstalk.com/"
      >
        <img id="covid19" src={covid19} alt="Covid19"></img>
      </a>
    </div>
  );
}

export default Covid19;
