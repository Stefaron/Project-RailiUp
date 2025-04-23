import React, { useState } from "react";
import "../App.css";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";
import coach1 from "../assets/coach-1.jpg";
import coach2 from "../assets/coach-2.jpg";
import coach3 from "../assets/coach-3.jpg";
import coach4 from "../assets/coach-4.jpg";
import AuthForms from "./AuthForms";

function Home() {
  const [showAuth, setShowAuth] = useState(false);

  const handleJoinNowClick = () => {
    setShowAuth(true);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setShowAuth(false);
  };

  if (showAuth) {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo" onClick={handleBackToHome} style={{ cursor: "pointer" }}>
            RalliUp Tennis
          </div>
        </nav>
        <AuthForms />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">RalliUp Tennis</div>
        <div className="nav-links">
          <a href="#our-story">Our Story</a>
          <a href="#instructors">Instructors</a>
          <a href="#locations">Locations</a>
          <a href="#faq">FAQ</a>
          <button className="join-button" onClick={handleJoinNowClick}>
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>RalliUp Tennis</h1>
          <p>Energize your life with the world's most exciting sport. Learn to play tennis, boost your game, and meet new friends.</p>
          <button className="join-button">Join Now</button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose RalliUp?</h2>

        <div className="join-fun">
          <h3>Join the Fun</h3>

          <div className="programs">
            <div className="program-card">
              <div className="program-image beginner"></div>
              <h4>Learn to Play (Beginner)</h4>
              <p>Master the basic strokes, rules, and strategy.</p>
            </div>

            <div className="program-card">
              <div className="program-image intermediate"></div>
              <h4>Boost Your Game (Intermediate)</h4>
              <p>Improve your consistency, power, and placement.</p>
            </div>

            <div className="program-card">
              <div className="program-image advanced"></div>
              <h4>Train Like a Pro (Advanced)</h4>
              <p>Develop advanced techniques, tactics, and mental toughness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Better Section */}
      <section className="get-better">
        <div className="get-better-content">
          <h2>Get better at tennis, faster</h2>
          <p>Meet pro coaches, learn new skills, and play on your schedule</p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="whats-included">
        <h2>What's included</h2>
        <p>Join RalliUp Tennis and get access to personalized coaching, skill-building exercises, match play, and more.</p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What our members are saying</h2>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={testimonial1} alt="Rachel" className="testimonial-img" />
            <p className="testimonial-text">I've improved my serve and backhand in just a few weeks. The coaches are great!</p>
            <p className="testimonial-author">- Rachel, 30</p>
          </div>

          <div className="testimonial-card">
            <img src={testimonial2} alt="Michael" className="testimonial-img" />
            <p className="testimonial-text">RalliUp has helped me gain confidence on the court. The video feedback is super helpful.</p>
            <p className="testimonial-author">- Michael, 35</p>
          </div>

          <div className="testimonial-card">
            <img src={testimonial3} alt="Emily" className="testimonial-img" />
            <p className="testimonial-text">The flexibility to book sessions when I want has been a game changer for me. I'm already seeing progress.</p>
            <p className="testimonial-author">- Emily, 25</p>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="coaches">
        <h2>Meet our top coaches</h2>

        <div className="coach-cards">
          <div className="coach-card">
            <div className="coach-img-container">
              <img src={coach1} alt="Lindsay Davenport" className="coach-img" />
            </div>
            <h3>Lindsay Davenport</h3>
            <p>Former world No. 1; 3-time Grand Slam singles champion</p>
          </div>

          <div className="coach-card">
            <div className="coach-img-container">
              <img src={coach2} alt="Patrick Mouratoglou" className="coach-img" />
            </div>
            <h3>Patrick Mouratoglou</h3>
            <p>Serena Williams' coach; Founder of the Mouratoglou Tennis Academy</p>
          </div>

          <div className="coach-card">
            <div className="coach-img-container">
              <img src={coach3} alt="Gigi Fernandez" className="coach-img" />
            </div>
            <h3>Gigi Fernandez</h3>
            <p>12-time Grand Slam doubles champion</p>
          </div>

          <div className="coach-card">
            <div className="coach-img-container">
              <img src={coach4} alt="Paul Annacone" className="coach-img" />
            </div>
            <h3>Paul Annacone</h3>
            <p>Roger Federer's former coach; ESPN analyst</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <button className="cta-button">Start your free trial</button>
      </section>
    </div>
  );
}

export default Home;
