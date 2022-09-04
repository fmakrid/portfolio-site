import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { motion } from "framer-motion";

const Smallbuttons = () => {
  return (
    <div id="smallbuttons">
      <ul>
        <li>
          <motion.a id="githubanimate" whileHover={{scale: 2}}
            href="https://github.com/fmakrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={github} alt="Github" />
          </motion.a>
          <motion.a id="linkedinanimate" whileHover={{scale: 2}}
            href="https://www.linkedin.com/in/filippos-makridis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={linkedin} alt="LinkedIn" />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Smallbuttons;
