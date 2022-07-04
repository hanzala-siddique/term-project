import React from "react";
import Background from "./Background";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <Background>
      <Row className="d-flex align-items-center justify-content-center text-center">
        <Col
          sm={12}
          style={{
            marginTop: "200px",
            textEmphasisColor: "#000",
          }}
        >
          <h1>Welcome to Todos Management App</h1>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center text-center">
        <Col sm={12} style={{ marginTop: "10px" }}>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="large">
              Get Started
            </Button>
          </Link>
        </Col>
      </Row>
    </Background>
  );
}

export default LandingPage;
