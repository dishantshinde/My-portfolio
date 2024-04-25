import React from "react";
import "./skills.css";
import uIdesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";
export default function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do?</span>
      <span className="skillDesc">
        I am skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites.I have a strong
        understanding of design and a keen eye for detail.I am proficient in
        HTML, CSS, and JavaScript.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uIdesign} alt="uI design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI UX Design</h2>
            <p>write your content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>this is demo content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>this is demo content</p>
          </div>
        </div>
      </div>
    </section>
  );
}
