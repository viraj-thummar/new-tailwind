import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { getPosts } from "../../actions/posts";
import PostForm from "./PostForm";
import LogoForm from "./LogoForm";

import "./admin.css";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("gsv-token");
    navigate("/admin/login");
  };
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-5">
          <Col>
            <PostForm />
          </Col>
          <Col>
            <LogoForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
