import resumeicon from "../assets/images/resumeicon.png";
import { motion } from "framer-motion";


const ResumeButton = () => {
  return (
    <div className="resumeBtn">
      <motion.a
        whileHover={{ scale: 1.8 }}
        href="https://www.dropbox.com/s/0fihty09kntl6nh/Resume-Filippos-Makridis.pdf?dl=1"
      >
        <img
          className="resumeicon"
          src={resumeicon}
          alt="ResumeIcon"
          title="Download Resume"
        />
      </motion.a>
    </div>
  );
};

export default ResumeButton;
