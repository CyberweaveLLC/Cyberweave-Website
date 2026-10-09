
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="logo" aria-label="Cyberweave home">
        <img
          src="/images/logo/Cyberweave%20Logo%20Straight%20TRANS.png"
          alt="Cyberweave"
        />
      </Link>

      <nav className="nav-links">
        <Link to="/#services">Services</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>

        <Link to="/scam-awareness" className="nav-scam-awareness">
            Scam Awareness
        </Link>

      </nav>

      <Link to="/#contact" className="nav-button">
        Get Started
      </Link>
    </header>
  );
}
