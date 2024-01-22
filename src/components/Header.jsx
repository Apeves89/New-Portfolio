import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";

const Header = ({
  classicHeader,
  darkTheme,
  setDarkTheme,
  homeRef,
  handleNavClick,
}) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);
  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/profile.jpg"
                title="I'm Alexis"
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Alexis Peves
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <Link
                  target={homeRef}
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="about"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="services"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  What I Do
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="resume"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="testimonial"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Testimonial
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-lg mt-lg-auto ms-auto ms-lg-0 d-flex">
            {/* <li className="social-icons-facebook">
              <Tooltip text="Facebook" placement="top">
              <a
              href="http://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                </Tooltip>
                </li>
                <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                <a
                href="http://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-twitter" />
                </a>
                </Tooltip>
              </li> */}
            <li className="social-icons-linkedin">
              <Tooltip text="Linkedin" placement="top">
                <a
                  href="https://www.linkedin.com/in/alexpeves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </Tooltip>
            </li>
            {darkTheme ? (
              <li className="social-icons-reddit">
                <Tooltip text="Light" placement="top">
                  <a
                    className="lightdarkmode"
                    onClick={() => {
                      setDarkTheme(!darkTheme);
                    }}
                  >
                    <i className="fas fa-sun bounce" />
                  </a>
                </Tooltip>
              </li>
            ) : (
              <li className="social-icons-github">
                <Tooltip text="Dark" placement="top">
                  <a
                    className="lightdarkmode"
                    onClick={() => {
                      setDarkTheme(!darkTheme);
                    }}
                  >
                    <i className="fas fa-moon bounce" />
                  </a>
                </Tooltip>
              </li>
            )}
            <li className="social-icons-github">
              <Tooltip text="Github" placement="top">
                <a
                  href="https://github.com/Apeves89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;
