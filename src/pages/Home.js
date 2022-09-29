import React from "react";
import "../assets/css/Home.css";
import { useNavigate } from "react-router-dom";
import Smallbuttons from "../components/Smallbuttons";
import ResumeButton from "../components/ResumeButton";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div id="home">
      <h1 id="name">Filippos Makridis</h1>
      <h3 id="titles">Computer Engineer | Web Developer | Software Engineer</h3>
      <ResumeButton />
      <button id="viewprojectsbutton" onClick={() => navigate("/Projects")}>
        View Projects
      </button>

      <Smallbuttons />
    </div>
  );
};

export default Home;
