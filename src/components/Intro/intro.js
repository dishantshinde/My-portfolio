import React from "react";
import "./intro.css";
import Image from "../../assets/image.png";
import { Link } from "react-scroll";
import Btnimg from "../../assets/hireme.png";

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm<span className="introName"> Dishant</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br />
          visually appealing web sites
        </p>
        <Link
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="btn">
            <img src={Btnimg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/business-visual-data-analyzing-technology-by-creative-computer-software_31965-17503.jpg?w=1060"
        alt="Profile"
        className="bg"
      />
    </section>
  );
}
