import React from "react";
import resumeimage from "../assets/images/resumefull.png";
import "../assets/css/Resume.css";

const Resume = () => {
  return (
    <div id="resumeRender">
      <a href="https://www.dropbox.com/s/0exn4yirdbmut7z/Resume-Filippos-Makridis.pdf?dl=1">
        <img src={resumeimage} alt="ResumeImage" />
      </a>
    </div>
  );
};

export default Resume;
