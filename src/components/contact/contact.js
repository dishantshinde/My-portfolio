import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import facebookicon from "../../assets/facebook-icon.png";
import twittericon from "../../assets/twitter.png";
import youtubeicon from "../../assets/youtube.png";
import instagramicon from "../../assets/instagram.png";

export default function Contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with diverse group of companies.
          Some of the notable companies i have worked with includes...
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="walmart logo" className="clientImg" />
          <img src={Adobe} alt="adobe logo" className="clientImg" />
          <img src={microsoft} alt="microsoft logo" className="clientImg" />
          <img src={facebook} alt="facebook logo" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            name="message"
            rows="5"
            placeholder="your message"
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={facebookicon} alt="facebook" className="link" />
            <img src={twittericon} alt="twitter" className="link" />
            <img src={youtubeicon} alt="youtube" className="link" />
            <img src={instagramicon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}
