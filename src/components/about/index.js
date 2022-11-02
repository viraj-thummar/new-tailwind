import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";

import CommonNavbar from "../CommonNavbar";
import Footer from "../Footer";

import line from "../../images/line.png";
import _about from "../../images/_about.png";
import DpBack from "../../images/DP-back.svg";
import bondImg from "../../images/bond.png";
import networkMap from "../../images/networkMap.png";

import "./about.css";
import { Desirebilities, whatWeDo } from "./DesirebilityData";

function index() {
  const bondCarousel = [
    {
      title: "We Founder Circle",
      description:
        "We Founder Circle is a digital-first, community-based investment platform with community members who are a mix of corporate executives, founders, and Investors who have been part of the start-up ecosystem. Gaurav Singhvi is the Co-Founder of We Founder Circle.",
    },
    {
      title: "Evolvex",
      description:
        "A ‘We Founder Circle’ Accelerator that is designed to support and guide early-stage, growth-driven companies to accelerate progress. It has an extensive network of seasoned mentors and exceptional entrepreneurs, Gaurav Singhvi extends his mentorship capabilities to this EvolveX and is also its Director.",
    },
    {
      title: "Gaya Global Connections",
      description:
        "Gaurav Singhvi is the Director of this Entertainment and Events company. The Financial Super Market Gaurav Singhvi is the Co-Founder of this India-focused advisory services firm.",
    },
    {
      title: "Surat Golf Club",
      description:
        "Gaurav Singhvi has a 50% stake in this Surat Golf Club. He is also the Director here.",
    },
    {
      title: "The Financial Super Market",
      description:
        "Gaurav Singhvi is the Co-Founder of this India-focused advisory services firm.",
    },
    {
      title: "ُProvyz",
      description:
        "Gaurav Singhvi is the Co-Founder of Provyz, a value-added collaborative workspace built to unlock possibilities.",
    },
    {
      title: "Climate Detox",
      description:
        "Started as a mission to support UN Sustainable Development Goals, Climate Detox was founded by Gaurav Singhvi",
    },
  ];
  return (
    <div className="about_page">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="flex flex-col md:h-[30vh] h-[40vh] overflow-hidden mt-36 justify-center ">
        <Container>
          <div className="">
            <h1 className="lg:text-[56px] md:text-5xl text-4xl">We help to grow companies</h1>
            <p className="text-base mt-8">
              If you are thinking about growing your start-up to the next level,
              you are at the right place.
            </p>
          </div>
        </Container>
      </div>
      <div className="h-20"></div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="flex items-center">
              <span className="ml-[-12px] md:ml-[-50px]">
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p className="mb-0 pl-3 text-base font-medium">About GSV</p>
            </div>
            <p className=" md:text-4xl text-3xl my-4 ">About GSV Section</p>
            <p className="text-base">
              Most early-stage companies go through growing pains, especially
              when it comes to funding and business development. That is exactly
              where Gaurav Singhvi Ventures (GSV), a family office investment
              entity, comes in – hand-holding your company through this
              difficult phase through to actual growth. We are a funding
              platform for budding entrepreneurs for their start-up ventures.
            </p>
            <p className="text-base">
              As of now, GSV has invested in 95 promising start-ups across
              India. Get in touch with us if you are looking at seed funding,
              community building, networking, mentorship, fundraising, and
              entrepreneurship.
            </p>
            <Row className="py-4">
              <Col xs={12} md={6} lg={12}>
                <div className="">
                  <p className="text-2xl font-medium">Our mission</p>
                  <p className="text-base">
                    Co-create success – yours and ours.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <div className="">
                  <p className="text-2xl font-medium">Our vision</p>
                  <p className="text-base">
                    To make India a vibrant start-up nation.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col md={12} lg={5}>
            <div className="img_box">
              <img className="img-fluid" src={_about} alt="about" />
              <img
                className="img-fluid d-none d-lg-block dp_back"
                src={DpBack}
                alt="about"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="h-20"></div>
      <div className="bg-[#fefbf5]">
        <div className="h-20"></div>
        <Container>
          <div className="flex items-center">
            <span className="ml-[-12px] ">
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p className="mb-0 pl-3 text-base font-medium">Our Values</p>
          </div>
          <p className="my-3 font-medium md:text-4xl text-3xl">
            Our Desirebility
          </p>
          <Row>
            {Desirebilities?.map((desirebility, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="pt-5">
                <div className="h-[100px] w-[100%]">
                  <img
                    className="img-fluid"
                    src={desirebility.icon}
                    alt="desirebilityIcon"
                  />
                </div>
                <p className="text-2xl pb-2.5 ">
                  {desirebility.title}
                </p>
                <p className="font-normal text-[#4d4d4d] text-[16px] leading-[150%]">
                  {desirebility.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="h-20"></div>
        <div className="h-20"></div>

        <Container>
          <div className="flex items-center">
            <span className="ml-[-12px] md:ml-[-50px]">
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p className="mb-0 pl-3 text-base font-medium">Bond</p>
          </div>
          <p className="my-3 font-medium md:text-4xl text-3xl">My Bond with Startups</p>
          <Carousel>
            {bondCarousel?.map((bond, index) => (
              <Carousel.Item key={index}>
                <Row className="py-5">
                  <Col lg={6} className="pt-0 pt-lg-4">
                    <Carousel.Caption className="carousel_caption">
                      <h3 className="smallFont">{bond.title}</h3>
                      <p className="extraSmallFont">{bond.description}</p>
                    </Carousel.Caption>
                  </Col>
                  <Col lg={6} className="pt-5 pt-lg-0">
                    <img className="img-fluid" src={bondImg} alt="bondImage" />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <div className="h-20"></div>
      </div>
      <div className="h-20"></div>
      <Container>
        <div className="flex items-center">
          <span className="ml-[-12px] md:ml-[-50px]">
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p className="mb-0 pl-3 text-base font-medium">what we do</p>
        </div>
        <p className="my-3 font-medium md:text-4xl text-3xl">what we do</p>
        <Row>
          {whatWeDo?.map((item, index) => (
            <Col key={index} md={6} className="pt-5">
              <p className="text-2xl">{item.title}</p>
              <p className="text-base">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <Row>
          <Col lg={5} className="flex items-center">
            <div>
              <div className="flex items-center">
                <span className="ml-[-12px] md:ml-[-50px]">
                  <img className="" src={line} alt="line" />
                </span>
                <p className="mb-0 pl-3 text-base font-medium">My Network</p>
              </div>
              <p className="my-3 font-medium md:text-4xl text-3xl">
                Our Presence across the World
              </p>
              <p className="text-base">
                Apart from the Indian subcontinent, we have branches in a few
                other places across the globe.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <img className="img-fluid" src={networkMap} alt="Network" />
          </Col>
        </Row>
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default index;
