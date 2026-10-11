
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
  if (!menuOpen) return;

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".nav-links") &&
      !event.target.closest(".menu-toggle")
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, [menuOpen]);

  return (
    <header className="navbar">
      <Link
        to="/"
        className="logo"
        aria-label="Cyberweave home"
        onClick={closeMenu}
      >
        <img
          src="/images/logo/Cyberweave%20Logo%20Straight%20TRANS.png"
          alt="Cyberweave"
        />
      </Link>

      <nav className={`nav-links${menuOpen ? " open" : ""}`}>

        <Link to="/#projects" onClick={closeMenu}>
          
        </Link>

        <Link to="/#about" onClick={closeMenu}>
          
        </Link>

        <Link
          to="/contact"
          className="mobile-get-started"
          onClick={closeMenu}
        >
          Get Started
        </Link>

        <Link
          to="/scam-awareness"
          className="nav-scam-awareness"
          onClick={closeMenu}
        >
          Scam Awareness
        </Link>
      </nav>

      <Link to="/contact" className="nav-button">
        Get Started
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
