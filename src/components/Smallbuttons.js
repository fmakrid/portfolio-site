import "animate.css";
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
            <img id="github" src={require("./github.png")} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/filippos-makridis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={require("./linkedin.png")} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Smallbuttons;
