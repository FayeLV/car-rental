import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { to: "/", label: "Home", className: "home-link" },
    { to: "/about", label: "About", className: "about-link" },
    { to: "/models", label: "Vehicle Models", className: "models-link" },
    { to: "/testimonials", label: "Testimonials", className: "testi-link" },
    { to: "/team", label: "Our Team", className: "team-link" },
    { to: "/contact", label: "Contact", className: "contact-link" },
  ];

  const NavLinks = ({ onClick }) => (
    <ul className="navbar__links">
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link className={link.className} to={link.to} onClick={onClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark" aria-label="Close menu"></i>
        </div>
        <NavLinks onClick={openNav} />
      </div>

      {/* desktop */}
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="Company Logo" />
          </Link>
        </div>
        <NavLinks />
        <div className="navbar__buttons">
          <Link className="navbar__buttons__sign-in" to="/signin">
            Sign In
          </Link>
          <Link className="navbar__buttons__register" to="/register">
            Register
          </Link>
        </div>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars" aria-label="Open menu"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
