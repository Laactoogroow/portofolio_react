import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiHonorOfKingsFill } from "react-icons/ri";
import { GiSwordClash } from "react-icons/gi";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          possimus voluptatem saepe reiciendis suscipit magnam mollitia
          repudiandae vitae explicabo unde labore praesentium, corrupti
          blanditiis nihil, fugiat iste sint, temporibus harum!
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3 />
          <FaPhp />
          <IoLogoJavascript />
          <FaBootstrap />
          <br />
          <FaReact />
          <RiHonorOfKingsFill />
          <GiSwordClash />
        </div>
      </div>
    </section>
  );
}

export default About;
