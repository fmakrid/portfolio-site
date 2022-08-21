import React from "react";
import "./Home.css";
import Smallbuttons from "../components/Smallbuttons";

const Home = () => {
  return (
    <div id="home">
      <h1 class="animate__animated animate__bounce">Filippos Makridis</h1>
      <h3 id="titles">Computer Engineer | Web Developer | Software Engineer</h3>
      <button id="viewprojectsbutton">View Projects</button>
      <Smallbuttons />
    </div>
  );
};

export default Home;
