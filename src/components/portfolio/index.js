import React, { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import CommonNavbar from "../CommonNavbar";

import line from "../../images/line.png";

import "./portfolio.css";
import Footer from "../Footer";
import { getLogos } from "../../actions/logos";

const FilterSection = React.lazy(() => import("./FilterSection"));

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogos());
  }, [dispatch]);
  return (
    <div className="">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="mt-[72px] flex flex-col justify-center h-[50vh] overflow-hidden">
        <Container>
          <div className="w-[100%] md:w-[90%] lg:w-[70%]">
            <h1 className="lg:text-[56px] md:text-[40px] text-[36px]">
              Smell the Change, Act on the Change, Enjoy the Change
            </h1>
            <p className="font-normal text-[16px] leading-[150%] mt-[30px] text-[#4d4d4d]">
              Over time, we have made great investments. Take a look at our
              portfolio companies. Your success is what makes us successful
              investors!
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <FilterSection />
        </Suspense>
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Container>
        <div className="flex items-center">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p className="mb-0 pl-3 text-base font-medium">Experience</p>
        </div>
        <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">
          We have transformed industries and created new ones.
        </p>
        <Row className="py-5">
          <Col xs={12} md={6} lg={3}>
            <div className="font-[500] text-[64px] leading-[120%] text-center">100+</div>
            <p className="font-[500] text-[16px] leading-[120%] text-center">active portfolio companies</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-md-0">
            <div className="font-[500] text-[64px] leading-[120%] text-center">₹25M+</div>
            <p className="font-[500] text-[16px] leading-[120%] text-center">under management</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-lg-0">
            <div className="font-[500] text-[64px] leading-[120%] text-center">10</div>
            <p className="font-[500] text-[16px] leading-[120%] text-center">IPOs</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-lg-0">
            <div className="font-[500] text-[64px] leading-[120%] text-center">4</div>
            <p className="font-[500] text-[16px] leading-[120%] text-center">mergers and acquisitions</p>
          </Col>
        </Row>
      </Container>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default Index;
