import "../assets/css/Covid19.css";
import covid19 from "../assets/images/covid19.png";

function Covid19() {
  return (
    <div id="covid19">
      <h3>Covid19</h3>
      <a href="http://covid19worldmap2.eu-central-1.elasticbeanstalk.com/">
        <img src={covid19} alt="Covid19"></img>
      </a>
    </div>
  );
}

export default Covid19;
