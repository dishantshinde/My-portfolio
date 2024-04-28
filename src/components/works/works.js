import React from "react";
import "./works.css";
import flashcardImg from "../../assets/flashcard ss.png";
import pizzaMenu from "../../assets/pizza menu ss.png";
import farAway from "../../assets/travel-list ss.png";

export default function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to smallest details and make sure that
        my work is pixel perfect.I am excited to bring my skills and experiences
        to help businesses achieve their goals and make strong online presence.
      </span>
      <span className="project-title">My projects</span>
      <div className="worksImgs">
        <div className="my-project">
          <span>Flashcard generator</span>
          <img src={flashcardImg} alt="project1-img" />
          <div className="project-btns">
            <button type="click">
              <a href="https://github.com/dishantshinde">Source code</a>
            </button>
            <button type="click">
              <a href="https://flashcardbydss.netlify.app/">view site</a>
            </button>
          </div>
        </div>
        <div className="my-project">
          <span>Pizza menu</span>
          <img src={pizzaMenu} alt="project2-img" />
          <div className="project-btns">
            <button type="click">
              <a href="https://github.com/dishantshinde">Source code</a>
            </button>
            <button type="click">
              <a href="https://flashcardbydss.netlify.app/">view site</a>
            </button>
          </div>
        </div>
        <div className="my-project">
          <span>Far away</span>
          <img src={farAway} alt="project3-img" />
          <div className="project-btns">
            <button type="click">
              <a href="https://github.com/dishantshinde">Source code</a>
            </button>
            <button type="click">
              <a href="https://flashcardbydss.netlify.app/">view site</a>
            </button>
          </div>
        </div>
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
}
