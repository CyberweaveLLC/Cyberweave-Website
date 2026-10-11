import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import ScamAwareness from "./pages/ScamAwareness";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function HomePage() {
  return (
    <div className="site">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-image" aria-hidden="true">
            <img
              src="/images/hero/hero.png"
              alt=""
            />
          </div>

  <div className="hero-content">

            <h1>
              Technology built
              <span> differently.</span>
            </h1>

            <p className="hero-text">
              We provide technology solutions, and build software
              designed to make tomorrow more capable than today.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="primary-button">
                Explore Cyberweave
              </a>

              <a href="/contact" className="secondary-button">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-grid" aria-hidden="true">
            <div className="grid-line line-1"></div>
            <div className="grid-line line-2"></div>
            <div className="grid-line line-3"></div>
            <div className="grid-line line-4"></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Technology with purpose.</h2>
            <p>
              From local repair services to software engineering, Cyberweave
              brings technology together under one roof.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="card-number">01</span>
              <h3>Software Engineering</h3>
              <p>
                Custom software and digital tools built around real-world
                problems and practical solutions. We are actively searching for a software engineer
                to get this part rolling.
              </p>
            </article>

            <article className="service-card">
              <span className="card-number">02</span>
              <h3>Technology Repair</h3>
              <p>
                Reliable technology repair and support for individuals and
                businesses. Whether you need help with a specific device or want to discuss a new project, we're here to assist.
              </p>
            </article>

            <article className="service-card">
              <span className="card-number">03</span>
              <h3>Innovation</h3>
              <p>
                Developing new ideas, products, and projects that push
                technology forward. we have weekly innovation meetings, and discussions about emerging technologies with our community.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">OUR PROJECTS</p>
            <h2>Ideas becoming reality.</h2>
          </div>

          <div className="project-card">
            <div>
              <p className="project-label">CYBERWEAVE PROJECT</p>
              <h3>UniBench</h3>
              <p>
                A technology project created by Cyberweave. UniBench is designed to 
                provide CRM functionality for managing and completing ticketing processes, and 
                generating reports on daily operations. When it is released, it will be used by 
                us for our business needs as well. This means active troubleshooting and support.
              </p>
            </div>

            <a
              href="https://www.patreon.com/collection/2324666"
              className="project-link project-arrow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Support UniBench on Patreon"
            >
              ↗
            </a>
          </div>
        </section>

        <section id="about" className="mission-section">
          <div className="mission-content">
            <p className="eyebrow">OUR MISSION</p>

            <h2>
              Build technology that makes a difference.
            </h2>

            <p>
              Cyberweave exists to create useful technology, solve meaningful
              problems, and make advanced solutions more accessible. What
              starts as an idea can become a tool, a service, or an entirely
              new way of doing things.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">LET'S BUILD SOMETHING</p>

          <h2>Have an idea, or need help?</h2>

          <p>
            Whether you need technology support, software, or want to discuss
            a new project, we'd like to hear from you.
          </p>

          <a
            href="/contact"
            className="secondary-button"
          >
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* Routes */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/scam-awareness"
          element={<ScamAwareness />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route path="/contact" 
        element={<Contact />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;