
import { Link } from "react-router-dom";
import {
  SiGoogle,
  SiFacebook,
  SiPatreon,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-brand">
          <strong>CYBERWEAVE</strong>
          <p>Imagine. Create. Innovate.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://share.google/ufQtWgwDePTtARISL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find Cyberweave on Google"
            title="Google"
            className="social-google"
          >
            <SiGoogle />
          </a>

          <a
            href="https://www.facebook.com/Cyberweave/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="social-facebook"
          >
            <SiFacebook />
          </a>

          <a
            href="https://www.patreon.com/cw/CyberweaveLLC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support Cyberweave on Patreon"
            title="Patreon"
            className="social-patreon"
          >
            <SiPatreon />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p>
          © {new Date().getFullYear()} Cyberweave LLC.
          All rights reserved.
        </p>

        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
