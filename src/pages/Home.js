import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import Smallbuttons from "../components/Smallbuttons";

const Home = () => {
  return (
    <div id="home">
      <h1 id="name">Filippos Makridis</h1>
      <h3 id="titles">Computer Engineer | Web Developer | Software Engineer</h3>
      <Link to="/Projects">
        <button id="viewprojectsbutton">View Projects</button>
      </Link>

      <Smallbuttons />
    </div>
  );
};

export default Home;
