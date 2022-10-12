import React from "react";
import "../assets/css/Home.css";
import { useNavigate } from "react-router-dom";
import Smallbuttons from "../components/Smallbuttons";
import ResumeButton from "../components/ResumeButton";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div class="home">
      <h1 class="name">Filippos Makridis</h1>
      <h3 class="titles">Computer Engineer | Web Developer | Software Engineer</h3>
      <ResumeButton />
      <button class="viewprojectsbutton" onClick={() => navigate("/Projects")}>
        View Projects
      </button>

      <Smallbuttons />
    </div>
  );
};

export default Home;
