import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

const Smallbuttons = () => {
  return (
    <div id="smallbuttons">
      <ul>
        <li>
          <a
            href="https://github.com/fmakrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/filippos-makridis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Smallbuttons;
