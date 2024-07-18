import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import dishantLogo from "../../assets/dishant logo 4.png";
export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={dishantLogo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem link"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem link"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem link"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem link"
        >
          Resume
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setshowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
