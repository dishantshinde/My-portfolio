import React from "react";
import "./contact.css";
import facebookicon from "../../assets/facebook-icon.png";
import instagramicon from "../../assets/instagram.png";

export default function Contact() {
  const email = "dishantshinde13@gmail.com";

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard");
    } catch (error) {
      console.error("Error copying email to clipboard:", error);
    }
  };
  return (
    <section id="contactPage">
      <div className="resume">
        <h1 className="resume-page-title">My resume</h1>
        <p>
          If you believe that I am the candidate whom you seek, I invite you to
          peruse my attached resume for further insights into my qualifications
          and experiences.
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/resume/resume.pdf`}
          download="Resume.pdf"
        >
          Click here to download
        </a>
      </div>
      <div id="contact">
        <h2>My Contact</h2>
        <h4 className="contactDesc">
          I am readily available for contact, and you may reach out to me using
          the social media links provided below.
        </h4>
        <div className="links">
          <a href="https://www.facebook.com/dishant.shinde.503">
            <img src={facebookicon} alt="facebook" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/dishant-shinde-33a003211/">
            <img
              src="https://cdn.icon-icons.com/icons2/730/PNG/512/linkedin_icon-icons.com_62764.png"
              alt="linkedin"
              className="link"
            />
          </a>
          <div>
            <button className="btn-copy-email" onClick={handleCopyToClipboard}>
              <img
                src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
                alt="gmail"
                className="link"
              />
            </button>
          </div>

          <a href="https://www.instagram.com/_dishant_shinde_/?hl=en">
            <img src={instagramicon} alt="instagram" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
}
