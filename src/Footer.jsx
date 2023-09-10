import React from "react";
import { pageLinks, socialLinks } from "./Data";
const Footer = () => {
  return (
    <div className="body">
      <footer id="footer" className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="footer-link scroll-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a href={href} target="-blank" className="footer-icon">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; owolabis travel tour company{" "}
          <span id="date">{new Date().getFullYear()}</span>. all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
