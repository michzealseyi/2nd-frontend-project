import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import About from "./ImgSvg/about.jpeg";
import WalletSvg from "./ImgSvg/WalletSvg";
import TreeSvg from "./ImgSvg/TreeSvg";
import SearchSvg from "./ImgSvg/SearchSvg";
import SocksSvg from "./ImgSvg/SocksSvg";
import Tour1 from "./ImgSvg/tour-1.jpeg";
import Tour2 from "./ImgSvg/tour-2.jpeg";
import Tour3 from "./ImgSvg/tour-3.jpeg";
import Tour4 from "./ImgSvg/tour-4.jpeg";
import Tour5 from "./ImgSvg/tour-5.jpeg";
import Tour6 from "./ImgSvg/tour-6.jpeg";
import MapSvg from "./ImgSvg/MapSvg";
import TwitterSvg from "./ImgSvg/TwitterSvg";
import FacebookSvg from "./ImgSvg/FacebookSvg";
import IgSvg from "./ImgSvg/IgSvg";
import Logo from "./ImgSvg/logo.svg";
import BarsSvg from "./ImgSvg/BarsSvg";
function App() {
  const linkRef = useRef(null);
  const [isNavOpen, setIsNavOpen] =
    useState(false);
  useEffect(() => {
    const scrollLinks =
      document.querySelectorAll(
        ".scroll-link"
      );
    scrollLinks.forEach((link) => {
      link.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          setIsNavOpen(false);
          const id = e.target
            .getAttribute("href")
            .slice(1);
          const element =
            document.getElementById(id);
          let position =
            element.offsetTop - 62;
          window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
          });
        }
      );
    });
  }, []);
  return (
    <div className="body">
      {/* HEADER */}
      <header id="home">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img
                src={Logo}
                alt=""
                className="nav-logo"
              />
              <button
                className="nav-toggle"
                id="nav-toggle"
                onClick={() =>
                  setIsNavOpen(
                    !isNavOpen
                  )
                }
              >
                <BarsSvg />
              </button>
            </div>
            <ul
              className={`nav-links ${
                isNavOpen
                  ? "show-links"
                  : ""
              }`}
              id="nav-links"
              ref={linkRef}
            >
              <li>
                <a
                  href="#home"
                  className="nav-link scroll-link"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link scroll-link"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="nav-link scroll-link"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="nav-link scroll-link"
                >
                  featured
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="nav-link scroll-link"
                >
                  gallery
                </a>
              </li>
            </ul>
            <ul className="nav-icons">
              <li>
                <a
                  href="https://www.twitter.com"
                  target="-blank"
                  className="nav-icon"
                >
                  <TwitterSvg />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="-blank"
                  className="nav-icon"
                >
                  <FacebookSvg />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="-blank"
                  className="nav-icon"
                >
                  <IgSvg />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* END OF NAVBAR */}
        <div className="hero">
          <div className="hero-banner">
            <h1>continue exploring</h1>
            <p>
              Lorem ipsum dolor sit amet
              consectetur adipisicing
              elit. Nobis possimus in,
              enim dolorem similique
              obcaecati!
            </p>
            <a
              href="#featured"
              className="btn hero-btn scroll-link"
            >
              explore tours
            </a>
          </div>
        </div>
      </header>
      {/* END OF HEADER */}
      {/* ABOUT SECTION */}
      <section
        className="section"
        id="about"
      >
        <div className="section-title">
          <h2>
            about <span>us</span>
          </h2>
        </div>
        <div className="section-center about-center">
          <article className="about-img">
            <img
              src={About}
              alt=""
              className="about-photo"
            />
          </article>
          <article className="about-info">
            <h3>
              explore the difference
            </h3>
            <p>
              Lorem ipsum dolor, sit
              amet consectetur
              adipisicing elit.
              Distinctio impedit
              repellat odio. Doloremque
              pariatur sunt nesciunt,
              est ut recusandae
              reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor, sit
              amet consectetur
              adipisicing elit.
              Distinctio impedit
              repellat odio. Doloremque
              pariatur sunt nesciunt,
              est ut recusandae
              reprehenderit.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
      {/* END OF ABOUT SECTION */}
      {/* SERVICES */}
      <section
        className="section services"
        id="services"
      >
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <WalletSvg />
            </span>
            <div className="service-info">
              <h4 className="service-title">
                saving money
              </h4>
              <p className="service-text">
                Lorem ipsum dolor sit
                amet consectetur,
                adipisicing elit.
                Doloremque quasi
                corrupti velit esse
                cupiditate neque?
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <TreeSvg />
            </span>
            <div className="service-info">
              <h4 className="service-title">
                endless biking
              </h4>
              <p className="service-text">
                Lorem ipsum dolor sit
                amet consectetur,
                adipisicing elit.
                Doloremque quasi
                corrupti velit esse
                cupiditate neque?
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <SocksSvg />
            </span>
            <div className="service-info">
              <h4 className="service-title">
                amazing comfort
              </h4>
              <p className="service-text">
                Lorem ipsum dolor sit
                amet consectetur,
                adipisicing elit.
                Doloremque quasi
                corrupti velit esse
                cupiditate neque?
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* END OF SERVICES */}
      {/* FEATURED TOURS */}
      <section
        className="section"
        id="featured"
      >
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          <article className="tour-card">
            <div className="tour-img-container">
              <img
                src={Tour1}
                alt=""
                className="tour-img"
              />
              <p className="tour-date">
                august 26th 2023
              </p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>ekiti adventure</h4>
                <p>6 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Placeat excepturi
                possimus, reiciendis
                inventore eaque error
                quo cumque dolore
                assumenda tenetur.
              </p>
              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <MapSvg /> nigeria
                  </span>
                </p>
                <p>from #300,000</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img
                src={Tour2}
                alt=""
                className="tour-img"
              />
              <p className="tour-date">
                october 10th 2023
              </p>
            </div>
            <div className="tour-info">
              <h4>calaber adventure</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Placeat excepturi
                possimus, reiciendis
                inventore eaque error
                quo cumque dolore
                assumenda tenetur.
              </p>
              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <MapSvg /> nigeria
                  </span>
                </p>
                <p>11 days</p>
                <p>from #500,000</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img
                src={Tour3}
                alt=""
                className="tour-img"
              />
              <p className="tour-date">
                september 15th 2023
              </p>
            </div>
            <div className="tour-info">
              <h4>dubai life</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Placeat excepturi
                possimus, reiciendis
                inventore eaque error
                quo cumque dolore
                assumenda tenetur.
              </p>
              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <MapSvg /> arab
                    emirate
                  </span>
                </p>
                <p>6 days</p>
                <p>from #300,000</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img
                src={Tour4}
                alt=""
                className="tour-img"
              />
              <p className="tour-date">
                december 26th 2023
              </p>
            </div>
            <div className="tour-info">
              <h4>jb adventure</h4>
              <p>
                Lorem ipsum dolor sit
                amet consectetur
                adipisicing elit.
                Placeat excepturi
                possimus, reiciendis
                inventore eaque error
                quo cumque dolore
                assumenda tenetur.
              </p>
              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <MapSvg /> s africa
                  </span>
                </p>
                <p>16 days</p>
                <p>from #3,000,000</p>
              </div>
            </div>
          </article>
        </div>
        <div className="tour-btn">
          <a href="#" className="btn">
            all tours
          </a>
        </div>
      </section>
      {/* END OF FEATURED TOURS */}
      {/* CONTACT */}
      <section
        className="section contact"
        id="contact"
      >
        <div className="section-center contact-center">
          <article className="contact-title">
            <h3>
              want lastest tour info and
              updates?
            </h3>
            <p>
              Sign up for newsletter and
              stay up to date
            </p>
          </article>
          <form className="contact-form">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="your email"
            />
            {/* THE TYPE="SUBMIT" HELPS US TO SUBMIT D FORM WITH AN ENTER KEY */}
            <button
              type="submit"
              className="btn-submit"
            >
              submit
            </button>
          </form>
        </div>
      </section>
      {/* END OF CONTACT */}
      {/* GALLERY */}
      <section id="gallery">
        <div className="gallery-center">
          <article className="gallery-img-container">
            <img
              src={Tour1}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour2}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour3}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour1}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour4}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour3}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour5}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
          <article className="gallery-img-container">
            <img
              src={Tour6}
              alt=""
              className="gallery-img"
            />
            <a
              href="#"
              className="gallery-icon"
            >
              <SearchSvg />
            </a>
          </article>
        </div>
      </section>
      {/* END OF GALLERY */}
      {/* FOOTER */}
      <footer className="section footer">
        <ul className="footer-links">
          <li>
            <a
              href="#home"
              className="footer-link scroll-link"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="footer-link scroll-link"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="footer-link scroll-link"
            >
              services
            </a>
          </li>
          <li>
            <a
              href="#featured"
              className="footer-link scroll-link"
            >
              featured
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="footer-link scroll-link"
            >
              gallery
            </a>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="-blank"
              className="footer-icon"
            >
              <TwitterSvg />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="-blank"
              className="footer-icon"
            >
              <FacebookSvg />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="-blank"
              className="footer-icon"
            >
              <IgSvg />
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; owolabis
          travel tour company{" "}
          <span id="date"></span>. all
          rights reserved
        </p>
      </footer>
      {/* END OF FOOTER */}
    </div>
  );
}

export default App;
