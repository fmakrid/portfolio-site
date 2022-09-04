import resumeicon from "../assets/images/resumeicon.png";
import { motion } from "framer-motion";


const ResumeButton = () => {
  return (
    <div id="resumeBtn">
      <motion.a
        whileHover={{ scale: 2 }}
        href="https://www.dropbox.com/s/0exn4yirdbmut7z/Resume-Filippos-Makridis.pdf?dl=1"
      >
        <img
          id="resumeicon"
          src={resumeicon}
          alt="ResumeIcon"
          title="Download Resume"
        />
      </motion.a>
    </div>
  );
};

export default ResumeButton;
