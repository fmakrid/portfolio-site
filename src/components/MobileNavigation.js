import NavLinks from "./NavLinks";
import { CgMenu as Burger } from "react-icons/cg";
import { useState } from "react";
import { CgCloseO as CloseBtn } from "react-icons/cg";

const MobileNavigation = () => {
	const [isOpen, setOpen] = useState(false);

	const hamburgerIcon = (
		<Burger
			className="Burger"
			size="40px"
			color="white"
			onClick={() => setOpen(!isOpen)}
		/>
	);

	const closeIcon = (
		<CloseBtn
			className="Burger"
			size="40px"
			color="white"
			onClick={() => setOpen(!isOpen)}
		/>
	);

	const closeMobileMenu = () => setOpen(false);

	return <nav className="MobileNavigation">
		{isOpen ? closeIcon : hamburgerIcon}
		{isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
		</nav>;
};

export default MobileNavigation;
