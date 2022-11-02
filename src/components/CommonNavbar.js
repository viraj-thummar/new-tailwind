import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logoDark from "../images/navbarLogos/dark/logoDark.svg";
import facebookDark from "../images/navbarLogos/dark/facebookDark.svg";
import instagramDark from "../images/navbarLogos/dark/instagramDark.svg";
import linkedinDark from "../images/navbarLogos/dark/linkedinDark.svg";
import twitterDark from "../images/navbarLogos/dark/twitterDark.svg";
import logo from "../images/navbarLogos/logo.svg";
import facebook from "../images/navbarLogos/facebook.svg";
import instagram from "../images/navbarLogos/instagram.svg";
import linkedin from "../images/navbarLogos/linkedin.svg";
import twitter from "../images/navbarLogos/twitter.svg";

function CommonNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    chekPageName();
    changeNavBackground();
    window.addEventListener("scroll", changeNavBackground);
  });

  const [isHomePage, setIsHomePage] = useState(true);
  const chekPageName = () => {
    let pathName = window.location.pathname;
    if (pathName === "/") {
      setIsHomePage(true);
    } else setIsHomePage(false);
  };

  const tabLinkClass = isHomePage
    ? "tab_link !text-[#e6e6e6] hover:!text-[#fff]"
    : "!text-[#4d4d4d] hover:!text-[#000] .dark_tab_link";

  const [navbarBG, setNavbarBG] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBG(true);
    } else {
      setNavbarBG(false);
    }
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const handlePortfolio = (event) => {
    event.preventDefault();
    navigate("../portfolio");
  };
  const handleInsight = (event) => {
    event.preventDefault();
    navigate("../insight");
  };
  const handleAbout = (event) => {
    event.preventDefault();
    navigate("../about");
  };

  const navBG = navbarBG && isHomePage ? "#000" : "transparent";

  return (
    <div className="common_navbar container">
      <Navbar
        style={{ background: isHomePage ? navBG : "#fff" }}
        expand="lg"
        fixed="top"
      >
        <Container className="_container" fluid>
          <Navbar.Brand className="header_logo cursor-pointer" onClick={handleHome}>
            <img
              className="img-fluid me-5"
              width="95.5px"
              src={isHomePage ? logo : logoDark}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={isHomePage ? "" : "other_pages"}
          />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 __menu" navbarScroll>
              <Nav.Link
                className={`nav_link !pt-[10px] ${tabLinkClass}`}
                onClick={handleAbout}
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`nav_link !pt-[10px] ${tabLinkClass}`}
                onClick={handlePortfolio}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className={`nav_link !pt-[10px] ${tabLinkClass}`}
                onClick={handleInsight}
              >
                Insight
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://www.facebook.com/gaurav.singhvi.90"
              >
                <img
                  className="w-3 ml-5"
                  src={isHomePage ? facebook : facebookDark}
                  alt="facebook-logo"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/consultsinghvi/"
              >
                <img
                  className="w-6 ml-5"
                  src={isHomePage ? instagram : instagramDark}
                  alt="instagram-logo"
                />
              </a>
              <a
                target="_blank"
                href="http://www.linkedin.com/in/gaurav-vk-singhvi"
              >
                <img
                  className="w-6 ml-5"
                  src={isHomePage ? linkedin : linkedinDark}
                  alt="linkedin-logo"
                />
              </a>
              <a target="_blank" href="https://twitter.com/gauravsinghvi14">
                <img
                  className="w-6 ml-5"
                  src={isHomePage ? twitter : twitterDark}
                  alt="twitter-logo"
                />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CommonNavbar;
