import { Button, TextField } from "@material-ui/core";
import { SettingsSystemDaydreamRounded } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userService from "../../services/UserService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  return (
    <Container fluid="md" style={{ marginTop: "150px" }}>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <h1>Sign Up</h1>
        </Col>
      </Row>

      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Username"
            variant="standard"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Email"
            variant="standard"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <TextField
            type={"password"}
            id="standard-basic"
            fullWidth
            label="Password"
            variant="standard"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-lg-center" style={{ marginTop: "20px" }}>
        <Col lg={3}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            color="primary"
            onClick={(e) => {
              userService
                .register(name, email, password)
                .then((data) => {
                  console.log(data);
                  navigate("/login");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
