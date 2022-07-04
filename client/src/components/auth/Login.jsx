import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import userService from "../../services/UserService";

export default function Login() {
  const [email, setEmail] = useState("qlu@qlu.com");
  const [password, setPassword] = useState("qlu123");

  return (
    <Container fluid="md" style={{ marginTop: "150px" }}>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <TextField
            label="Email"
            fullWidth
            variant="standard"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
        <Col lg={3}>
          <TextField
            fullWidth
            type={"password"}
            label="Password"
            variant="standard"
            name="password"
            value={password}
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
            color="primary"
            fullWidth
            size="large"
            onClick={(e) => {
              userService
                .login(email, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/todos/1";
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
