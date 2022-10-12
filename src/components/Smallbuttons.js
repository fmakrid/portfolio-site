import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { motion } from "framer-motion";

const Smallbuttons = () => {
	return (
		<div className="smallbuttons">
			<ul>
				<li>
					<motion.a
						className="githubanimate"
						whileHover={{ scale: 2 }}
						href="https://github.com/fmakrid"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className="github" src={github} alt="Github" />
					</motion.a>
					<motion.a
						className="linkedinanimate"
						whileHover={{ scale: 2 }}
						href="https://www.linkedin.com/in/filippos-makridis/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="linkedin"
							src={linkedin}
							alt="LinkedIn"
						/>
					</motion.a>
				</li>
			</ul>
		</div>
	);
};

export default Smallbuttons;
