import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../images/navbarLogos/logo.svg";
import Mail from "../images/mail.svg";
import MapPin from "../images/map-pin.svg";
import Phone from "../images/phone.svg";

function Footer() {
  return (
    <div className="bg-[#292d32]">
      <Container>
        <div className="max-w-[90%] py-[20px] px-[0] my-[0] mx-[auto] text-white" id="footer">
          <Row>
            <Col sm={12} md={4} className="mt-5">
              <img className="img-fluid" src={logo} alt="logo" />
            </Col>
            <Col sm={12} md={4} className="mt-5 mb-0 mb-md-3">
              <p className="text-base font-black mb-[15px]">OUR OFFICE</p>
              <p className="text-base font-light leading-[120%]">
                The Financial Supermarket Tower 3rd Floor, Behind Rushabh Petrol
                Pump, Near Singapuri ni Wadi, Ring Rd, Surat, Gujarat 395002
              </p>
              <div className="flex items-center mt-3">
                <img className="img-fluid" src={MapPin} alt="map-pin" />
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/BHUBBqB9RL3asveY7"
                  className="decoration-transparent"
                >
                  <p className="text-white ps-3 mb-0 ">View our Location</p>
                </a>
              </div>
            </Col>
            <Col sm={12} md={4} className="mt-5 md:!pl-[100px] mb-0 mb-md-3">
              <p className="text-base font-black mb-[15px]">CONTACT US</p>
              <div className="flex items-center">
                <img className="" src={Mail} alt="mail" />
                <p className="text-base ps-3 mb-0 font-light">hrgsv@gmail.com</p>
              </div>
              <div className="d-flex align-items-center mt-3">
                <img className="img-fluid" src={Phone} alt="phone" />
                <p className="ps-3 mb-0 font-light">0261 4003080</p>
              </div>
            </Col>
          </Row>
          <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
          <p className="text-center mb-3 mb-md-0">
            ©2022 Gaurav Singhvi Ventures | All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
