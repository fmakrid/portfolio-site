import React from "react";
import "../assets/css/Home.css";
import Smallbuttons from "../components/Smallbuttons";

const Home = () => {
  return (
    <div id="home">
      <h1>Filippos Makridis</h1>
      <h3 id="titles">Computer Engineer | Web Developer | Software Engineer</h3>
      <button id="viewprojectsbutton">View Projects</button>
      <Smallbuttons />
    </div>
  );
};

export default Home;
