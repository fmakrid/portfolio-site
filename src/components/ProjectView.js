import covid19 from "../assets/images/covid19.png";

function ProjectView() {
  return (
    <div id="projectview">
      <ul>
        <li>
          <h3>Covid-19 World Map</h3>
          <a href="http://covid19worldmap2.eu-central-1.elasticbeanstalk.com/">
            <img id="covid19" src={covid19} alt="Covid19"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProjectView;
