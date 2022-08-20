const Smallbuttons = () => {
  return (
    <div id="smallbuttons">
      <a
        href="https://github.com/fmakrid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("./github.png")} alt="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/filippos-makridis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("./linkedin.png")} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default Smallbuttons;
