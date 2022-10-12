import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { motion } from "framer-motion";

const Smallbuttons = () => {
  return (
    <div class="smallbuttons">
      <ul>
        <li>
          <motion.a class="githubanimate" whileHover={{scale: 2}}
            href="https://github.com/fmakrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="github" src={github} alt="Github" />
          </motion.a>
          <motion.a class="linkedinanimate" whileHover={{scale: 2}}
            href="https://www.linkedin.com/in/filippos-makridis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="linkedin" src={linkedin} alt="LinkedIn" />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Smallbuttons;
