import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
	const animateFrom = { opacity: 0, y: -40 };
	const animateTo = { opacity: 1, y: 0 };
	return (
		<ul className="Navbar-links">
			<motion.div
				initial={animateFrom}
				animate={animateTo}
				transition={{ delay: 0.05 }}
			>
				<NavLink
					className="NavLink"
					to="/"
					onClick={() => props.isMobile && props.closeMobileMenu()}
					activestyle={{ color: "gold" }}
				>
					Home
				</NavLink>
			</motion.div>
			<motion.div
				initial={animateFrom}
				animate={animateTo}
				transition={{ delay: 0.1 }}
			>
				<NavLink
					className="NavLink"
					to="/projects"
					onClick={() => props.isMobile && props.closeMobileMenu()}
					activestyle={{ color: "gold" }}
				>
					My Work
				</NavLink>
			</motion.div>
			<motion.div
				initial={animateFrom}
				animate={animateTo}
				transition={{ delay: 0.2 }}
			>
				<NavLink
					className="NavLink"
					to="/about"
					onClick={() => props.isMobile && props.closeMobileMenu()}
					activestyle={{ color: "gold" }}
				>
					About
				</NavLink>
			</motion.div>
			<motion.div
				initial={animateFrom}
				animate={animateTo}
				transition={{ delay: 0.3 }}
			>
				<NavLink
					className="NavLink"
					to="/contact"
					onClick={() => props.isMobile && props.closeMobileMenu()}
					activestyle={{ color: "gold" }}
				>
					Contact
				</NavLink>
			</motion.div>
			<motion.div
				initial={animateFrom}
				animate={animateTo}
				transition={{ delay: 0.4 }}
			>
				<NavLink
					className="NavLink"
					to="/resume"
					onClick={() => props.isMobile && props.closeMobileMenu()}
					activestyle={{ color: "gold" }}
				>
					Resume
				</NavLink>
			</motion.div>
		</ul>
	);
};

export default NavLinks;
