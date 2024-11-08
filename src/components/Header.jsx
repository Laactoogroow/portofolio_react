import "../styles/Header.css";
import profilePicture from "../assets/Happy1.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Content() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Laactoogroow</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="socialMedia">
          <a href=""><FaInstagram /></a>
          <a href=""><FaTiktok /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaFacebook /></a>
        </div>
      </div>
    </header>
  );
}

export default Content;
