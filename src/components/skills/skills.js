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
            <p>
              UI (User Interface) design focuses on the visual aspects of a
              digital product, including layout, colors, typography, and
              interactive elements, aiming to create a visually appealing and
              intuitive interface for users. UX (User Experience) design, on the
              other hand, deals with the overall user journey and satisfaction,
              ensuring that the product is easy to use, efficient, and provides
              a positive experience. Both UI and UX design work together to
              create user-centric digital experiences that are aesthetically
              pleasing, functional, and user-friendly.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Website design encompasses both UI (User Interface) and UX (User
              Experience) design principles to create engaging, visually
              appealing, and user-friendly websites. UI design focuses on the
              look and feel of the website, including layout, colors,
              typography, and interactive elements, to create an aesthetically
              pleasing interface. UX design, on the other hand, emphasizes the
              overall user journey and experience, ensuring that the website is
              easy to navigate, intuitive, and provides value to users.
            </p>
          </div>
        </div>
      </div>
      <div className="tech-skills-cont">
        <h2>Tech Skills</h2>
        <div className="tech-skills">
          <div className="tech-skill">
            <h4>Frontend Development :</h4>
            <ol className="ordered-list">
              <li>
                <a href="https://react.dev/">
                  Reactjs
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/">
                  JavaScript
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/">
                  HTML5
                  <img
                    src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/">
                  Tailwind CSS
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_KMkPGOO3LxS-q0I28rfiwyo01RrtMqhTpJDKS9ReQ&s"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons">
                  Next.js
                  <img
                    src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                    alt="nextjs"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/">
                  Typescript
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/css/">
                  CSS3
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://getbootstrap.com/">
                  Bootstrap
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    alt=""
                  />
                </a>
              </li>
            </ol>
          </div>
          <div className="tech-skill">
            <h4>Backend Development :</h4>
            <ol className="ordered-list backend">
              <li>
                <a href="https://nodejs.org/en">
                  Node.js
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                    alt="node-js"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.mysql.com/">
                  My SQL
                  <img
                    src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
                    alt="my-sql"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.mongodb.com/">
                  MongoDB
                  <img
                    src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
                    alt="mongo-db"
                  />
                </a>
              </li>
              <li>
                <a href="https://vercel.com/">
                  Vercel
                  <img
                    src="https://raw.githubusercontent.com/DataDog/integrations-extras/master/vercel/images/logo-full-black.png"
                    alt="vercel"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.netlify.com/">
                  Netlify
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.png"
                    alt="netlify"
                  />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
