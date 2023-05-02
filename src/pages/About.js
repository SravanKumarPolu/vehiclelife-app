import React from "react";
import { Link } from "react-router-dom";
import bgImg from '../assets/images/about-hero.png';
export default function About() {
  return (
    <div className="about-page-container">
      <img  src={bgImg}className="about-hero-image"></img>
      <div className="about-page-content">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental.our van are recertified before each trip to ensure you travel
          plans can go off without a hitch.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br /> Your van is ready
        </h2>
        <Link className="link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
