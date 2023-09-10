import React, { useEffect, useRef, useState } from "react";
import BarsSvg from "./ImgSvg/BarsSvg";
import Logo from "./ImgSvg/logo.svg";
import { pageLinks } from "./Data";
import { socialLinks } from "./Data";

const Navbar = () => {
  const linkRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        setIsNavOpen(false);
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 62;
        window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth",
        });
      });
    });
  }, []);
  return (
    <div id="home" className="body">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} alt="" className="nav-logo" />
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <BarsSvg />
            </button>
          </div>
          <ul
            className={`nav-links ${isNavOpen ? "show-links" : ""}`}
            id="nav-links"
          >
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link scroll-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-icon">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            possimus in, enim dolorem similique obcaecati!
          </p>
          <a href="#contact" className="btn hero-btn scroll-link">
            contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
