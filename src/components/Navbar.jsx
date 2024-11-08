import "../styles/Navbar.css";
import logo from "../assets/meliodas.jpeg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState("tampil");
  function tampilMenu() {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">Vanzy</Link>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <FaBars /> : <IoMdClose />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#Gallery">Gallery</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <HashLink to="/experience">Experience</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
