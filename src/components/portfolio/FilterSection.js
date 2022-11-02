import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

import { getLogos, getFilteredLogos } from "../../actions/logos";

function FilterSection() {
  const logos = useSelector((state) => state.logos);
  const sectors = [
    "All",
    "Retail",
    "HealthTech",
    "FinTech",
    "InsurTech",
    "Transportation and Logistics Tech",
    "Food and Agriculture",
    "Consumer",
    "Financial Services",
    "Edtech",
    "Enterprise Applications",
    "Gaming",
    "Media and Entertainment",
    "Agriculture Tech",
    "Investment Industry",
    "Real Estate and Construction Tech",
    "FoodTech",
    "Technology",
    "Auto Tech",
    "Energy Tech",
    "Blockchain Technology",
    "Travel and Hospitality Tech",
    "Co-Working",
    "Healthcare",
  ];

  const tabs = ["All", "Active", "Primary Exit", "Acquisition"];
  const [activeTab, setActiveTab] = useState("All");

  const dispatch = useDispatch();

  // const [selected, setSelected] = useState("All");
  const [checked, setChecked] = useState("All");
  const handleFilter = (sector) => {
    // sector = sector.replace("&", "%26");
    setChecked(sector);
    dispatch(getFilteredLogos([activeTab, sector]));
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
    dispatch(getFilteredLogos([tab, checked]));
    setNoOfLogos(18);
  };

  const handleSectorReset = () => {
    dispatch(getLogos());
    setActiveTab("All");
    setChecked("All");
    setNoOfLogos(18);
  };

  const handleSelect = (value) => {
    dispatch(getFilteredLogos([activeTab, value]));
  };

  const [noOfLogos, setNoOfLogos] = useState(18);

  const slicedLogos = logos.slice(0, noOfLogos);
  const handleLoadMore = () => {
    setNoOfLogos(noOfLogos + noOfLogos);
  };

  const isMoreLogosAvailable = () => {
    return slicedLogos.length % 18;
  };

  return (
    <div className="filter_section">
      <div className="tab_bar">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            className={activeTab === tab ? "active" : ""}
            onClick={() => handleActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Row>
        <Col className="d-none d-lg-block" lg={4}>
          <div className="sectors_box">
            <div className="sectors_title">Sectors</div>
            {sectors?.map((sector, index) => (
              <div key={index} className="sector_item">
                <Form.Check
                  type="radio"
                  label={sector}
                  id={sector}
                  checked={checked === sector}
                  onChange={() => handleFilter(sector)}
                />
              </div>
            ))}
          </div>
          <div className="sector_resetBtnBox">
            <button className="sector_resetBtn" onClick={handleSectorReset}>
              Reset
            </button>
          </div>
        </Col>
        <Col className="d-block d-lg-none py-5">
          <Form.Select
            aria-label="Default select example"
            style={{ width: "50%" }}
            onChange={(e) => handleSelect(e.target.value)}
          >
            <option>Sectors</option>
            {sectors?.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col
          md={12}
          lg={8}
          className="d-flex justify-content-center align-items-start"
        >
          <Row className="py-5">
            {slicedLogos?.map((logo, index) => (
              <Col key={index} xs={6} md={4} className="py-3">
                <img
                  className="img-fluid"
                  src={logo.selectedFile}
                  alt="logoImg"
                />
              </Col>
            ))}
            {isMoreLogosAvailable() === 0 && (
              <button className="btn mt-5" onClick={() => handleLoadMore()}>
                Load More...
              </button>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FilterSection;
