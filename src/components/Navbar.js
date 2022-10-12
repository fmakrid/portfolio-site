import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "../assets/css/Navbar.css";

function Navbar() {
	return (
		<div className="Navbar">
			<h2 className="Brand-title">Makridis</h2>
			<nav className="Navbar-links">
				<Navigation />
				<MobileNavigation />
			</nav>
		</div>
	);
}

export default Navbar;
