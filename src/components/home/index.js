import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import heroFirst from "../../images/hero/hero-1.png";
import heroSecond from "../../images/hero/hero-2.png";
import heroThird from "../../images/hero/hero-3.png";
import hero1mob from "../../images/hero/hero1mob.png";
import hero2mob from "../../images/hero/hero2mob.png";
import hero3mob from "../../images/hero/hero3mob.png";
import line from "../../images/line.png";
import about from "../../images/about.png";
import DpBack from "../../images/DP-back.svg";
import rightArror from "../../images/arrow-right.svg";
import Footer from "../Footer";
import CommonNavbar from "../CommonNavbar";
import CommonCarousel from "../CommonCarousel";
import { getLogos } from "../../actions/logos";
import { getPosts } from "../../actions/posts";
import BlogArticle from "../insight/BlogArticle";

import "./home.css";
import PortfolioLogos from "./PortfolioLogos";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogos());
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  const blogList = posts?.slice(0, 3);

  const navigate = useNavigate();
  const handlePortfolio = (event) => {
    event.preventDefault();
    navigate("../portfolio");
  };

  const breakpoints = {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const slides = [
    {
      logo: "/gsv_assets/affliations/wfc.png",
      // title: "Co-Founder: - We Founder Circle",
      description:
        "Co-Founded by Gaurav Singhvi, WeFounderCircle is India’s #1 network of 4200+ Angel investors and Founders. WFC has so far made 60+ deals and has a presence in 30+ countries. WFC achieved this feat within 20 months from its inception.",
    },
    {
      logo: "/gsv_assets/affliations/tfs.png",
      // title: "Founder: - The Financial Supermarket",
      description:
        "Founded by Gaurav Singhvi, “The Financial Supermarket” is a360° financial advisory that operates PAN-India and specializes in areas such as Debt Syndication, Equity Financing that includes Investment Banking, SME & Mainboard IPO, Company Law Advisory & Management Consultancy. ",
    },
    {
      logo: "/gsv_assets/affliations/cc.png",
      // title: "National Director: - Corporate Connections",
      description:
        "CorporateConnections®(CC) is a global community where leaders connect. Gaurav Singhvi holds Master Franchise for CC in India, Nepal, and Sri Lanka. He is also the National Director of the community as well as the President of the Global Franchise Advisory Board. CC has 19 chapters in 16 cities in India and a combined membership of300+ corporate leaders as members.",
    },
    {
      logo: "/gsv_assets/affliations/bni.png",
      // title: "Executive Director: - BNI",
      description:
        "BNI is the largest business networking organization in the world. Gaurav Singhvi is the Executive Director of the Greater Surat chapter. With 1865+ members, BNI Surat is the fastest growing chapter in terms of member count in 1296 regions and the fastest growing region in the world (out of the 74 countries where BNI operates).",
    },
    {
      logo: "/gsv_assets/affliations/tab.png",
      // title: "Co-Founder: - The Amore Banquet",
      description:
        "'The Amore' is one of the most sought-after banqueting facilities in Surat and was co-founded by Gaurav Singhvi. It provides an elegant and superior banqueting space that caters to varied reqirements of clients.",
    },
    {
      logo: "/gsv_assets/affliations/provyz.png",
      // title: "Co-Founder: - Provyz Coworking Space",
      description:
        "Co-Founded by Gaurav Singhvi, Provyz is a value-added collaborative workspace. It is a capex-less, friendly and safe workspace, fully equipped with state-of-the-art facilities.",
    },
  ];
  return (
    <div className="home_Page">
      <CommonNavbar />
      <div className="banner_carousel">
        <Carousel>
          <Carousel.Item>
            <div className="relative">
              <img
                className="d-none d-md-block w-100"
                src={heroFirst}
                alt="First slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero1mob}
                alt="First slide"
              />
              <div className="w-[100%] h-[100%] absolute top-0 left-0" style={{background: "linear-gradient(89.57deg,rgba(0, 0, 0, 0.8) 0.35%,rgba(0, 0, 0, 0.4) 99.63%)"}}></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="lg:text-[72px] md:text-[56px] text-[40px] text-[#fff] font-black leading-[120%]">
                    Either You Innovate or Invest in Innovation
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="relative">
              <img
                className="d-none d-md-block w-100"
                src={heroSecond}
                alt="Second slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero2mob}
                alt="First slide"
              />
              <div className="w-[100%] h-[100%] absolute top-0 left-0" style={{background: "linear-gradient(89.57deg,rgba(0, 0, 0, 0.8) 0.35%,rgba(0, 0, 0, 0.4) 99.63%)"}}></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="lg:text-[72px] md:text-[56px] text-[40px] text-[#fff] font-black leading-[120%]">
                    Focus Makes You Rich and Diversification Keeps You, Rich
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="relative">
              <img
                className="d-none d-md-block w-100"
                src={heroThird}
                alt="Third slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero3mob}
                alt="First slide"
              />
              <div className="w-[100%] h-[100%] absolute top-0 left-0" style={{background: "linear-gradient(89.57deg,rgba(0, 0, 0, 0.8) 0.35%,rgba(0, 0, 0, 0.4) 99.63%)"}}></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="lg:text-[72px] md:text-[56px] text-[40px] text-[#fff] font-black leading-[120%] ">
                    Romancing with Risk
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="h-20"></div>
      <Container>
        <Row className="!items-center">
          <Col lg={6}>
            <div className="flex items-center">
              <span className="ml-[-12px] md:ml-[-50px]">
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p className="mb-0 pl-3 text-base font-medium">About</p>
            </div>
            <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%]">
              The Thought Leader
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-[#4d4d4d]">
              At the helm of GSV is CA Gaurav V Singhvi who brings more than 2
              decades of prowess in the finance and investment field. He is a
              Serial Entrepreneur, Business Strategist, Angel Investor, Start-Up
              Mentor, and Community Creator. Gaurav has been consistently
              delivering incubation as well as innovation, apart from mentoring
              start-ups across the country (not just in Tier 1 cities but Tier 2
              and Tier 3 as well). In short, he has been living his commitment
              to making India a vibrant start-up nation.
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-[#4d4d4d]">
              Gaurav is associated with companies that actively support
              early-stage start-ups, helping them grow faster by offering them
              seed funding, business development, and community building. His
              strongest passion is serving entrepreneurs and start-ups, and he
              has turned his passion into his purpose in life. Most of these
              start-ups he has invested in – irrespective of the tier they
              belong to – operate at the grassroots level, and tackle localized
              issues, making them viable for mass scale.
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-[#4d4d4d]">
              Apart from this, Gaurav is also the National Director, Executive
              Director & President-Elect of various notable institutions that
              mentor and foster entrepreneurship and play a growth catalyst
              role.
            </p>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col lg={5}>
            <div className="relative">
              <img className="img-fluid" src={about} alt="about" />
              <img
                className="img-fluid d-none d-lg-block dp_back lg:left[88%] md:left-[78%] "
                src={DpBack}
                alt="about"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <div className="flex items-center">
          <span className="ml-[-12px] md:ml-[-50px]">
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p className="mb-0 pl-3 text-base font-medium">Affiliations</p>
        </div>
        <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%]">
          Affiliations
        </p>
        <div className="h-20"></div>
        <CommonCarousel breakpoints={breakpoints} slides={slides} />
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <div className="flex items-center">
              <span className="ml-[-12px] md:ml-[-50px]">
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p className="mb-0 pl-3 text-base font-medium">Portfolio</p>
            </div>
            <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%]">
              Latest Portfolio
            </p>
            <p className="text-[#4d4d4d] mb-[40px]">
              Gaurav Singhvi has invested in many start-ups via Gaurav Singhvi
              Ventures. Take a look at our investment portfolios.
            </p>
            <div className="flex items-center">
              <a href="#" className="decoration-transparent text-black " onClick={handlePortfolio}>
                View Portfolio
              </a>
              <span className="!ml-[10px] h-[16px] w-[16px]">
                <img className="img-fluid" src={rightArror} alt="rightArror" />
              </span>
            </div>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col
            md={12}
            lg={7}
            className="flex justify-content-center items-center mt-5 mt-lg-0"
          >
            <PortfolioLogos />
          </Col>
        </Row>
      </Container>

      {/* <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <div className="flex items-center">
          <span className="ml-[-12px] md:ml-[-50px]">
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>Insights</p>
        </div>
        <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">Our Blogs</p>
        <Row>
          <Col xs={12} md={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={Insight1} />
              <p className="card_date">July 14, By Mark Henry</p>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="mb-[40px]">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="flex items-center">
                <a href="#">Read More</a>
                <span className="right_arrow">
                  <img
                    className="img-fluid"
                    src={rightArror}
                    alt="rightArror"
                  />
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={Insight2} />
              <p className="card_date">July 14, By Mark Henry</p>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="mb-[40px]">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="flex items-center">
                <a href="#">Read More</a>
                <span className="right_arrow">
                  <img
                    className="img-fluid"
                    src={rightArror}
                    alt="rightArror"
                  />
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5"></Col>
        </Row>
      </Container> */}
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <div className="flex items-center">
          <span className="ml-[-12px] md:ml-[-50px]">
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p className="mb-0 pl-3 text-base font-medium">Insights</p>
        </div>
        <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">
          In The Blogs
        </p>
        {blogList ? <BlogArticle blogs={blogList} /> : "loading"}
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default Index;
