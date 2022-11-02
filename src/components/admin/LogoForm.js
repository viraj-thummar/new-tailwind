import React, { useState } from "react";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createLogo } from "../../actions/logos";

function LogoForm() {
  const dispatch = useDispatch();
  const [logoData, setLogoData] = useState({
    title: "",
    link: "",
    status: "",
    industry: "",
    selectedFile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createLogo(logoData));
  };
  return (
    <div className="custom_form logo_form">
      <h5 className="form_header">Upload Logos</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={logoData.title}
            onChange={(e) => {
              setLogoData({ ...logoData, title: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link</Form.Label>
          <Form.Control
            name="link"
            value={logoData.link}
            onChange={(e) => {
              setLogoData({ ...logoData, link: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Status</Form.Label>
          <Form.Control
            name="status"
            value={logoData.status}
            onChange={(e) => {
              setLogoData({ ...logoData, status: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Industry</Form.Label>
          <Form.Control
            name="industry"
            value={logoData.industry}
            onChange={(e) => {
              setLogoData({ ...logoData, industry: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Logo Image:</Form.Label>
          <br />
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setLogoData({ ...logoData, selectedFile: base64 })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit Logo
        </Button>
      </Form>
    </div>
  );
}

export default LogoForm;
