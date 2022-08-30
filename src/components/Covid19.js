import covid19 from "../assets/images/covid19.png";
import {motion} from "framer-motion";

function Covid19() {
    return (
        <div id="covid19">
            <h3>Covid-19 World Map</h3>
          <h3>(Thesis)</h3>
          <motion.p class="firstLine">An interactive world map</motion.p>
          <motion.p class="secondLine">That shows the covid-19 cases of each country by color</motion.p>
          <motion.p class="thirdLine">Of each picked date.</motion.p>
          <a href="http://covid19worldmap2.eu-central-1.elasticbeanstalk.com/">
            <img id="covid19" src={covid19} alt="Covid19"></img>
          </a>
        </div>
    )
}

export default Covid19;