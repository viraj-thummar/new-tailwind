import React from "react";
import { useSelector } from "react-redux";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";

function PortfolioLogos() {
  // const logos = useSelector((state) => state.logos);
  const logoList = [
    {
      logo: "/gsv_assets/portfolio_companies/bharatpe.png",
      href: "https://bharatpe.com",
    },
    {
      logo: "/gsv_assets/portfolio_companies/innov8.png",
      href: "https://www.innov8.work:443/",
    },
    {
      logo: "/gsv_assets/portfolio_companies/homecapital.png",
      href: "https://homecapital.in",
    },
    {
      logo: "/gsv_assets/portfolio_companies/confirmtkt.png",
      href: "https://www.confirmtkt.com/",
    },
    { logo: "/gsv_assets/portfolio_companies/cleansecar.png", href: "" },
    {
      logo: "/gsv_assets/portfolio_companies/liquiloans.png",
      href: "https://www.liquiloans.com/",
    },
    {
      logo: "/gsv_assets/portfolio_companies/beardo.png",
      href: "https://www.beardo.in:443/",
    },
    {
      logo: "/gsv_assets/portfolio_companies/fynd.png",
      href: "https://www.fynd.com:443/",
    },
    {
      logo: "/gsv_assets/portfolio_companies/flickstree.png",
      href: "https://www.flickstree.com",
    },
  ];
  return (
    <div>
      <Row className="m-auto">
        {logoList?.map((logo, index) => (
          <Col key={index} xs={6} md={4} className="py-3">
            <a target="_blank" href={logo.href}>
              <img className="img-fluid" src={logo.logo} alt="logoImg" />
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PortfolioLogos;
