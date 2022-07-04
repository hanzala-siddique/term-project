import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import todoService from "../../services/TodosService";
import Auth from "../auth/Auth";

export default function NewTodo(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  return (
    <Auth>
      <Container style={{ marginTop: "150px" }}>
        <Row className="text-center" style={{ marginTop: "5px" }}>
          <Col lg={12}>
            <h1>Add a Todo</h1>
          </Col>
        </Row>
        <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
          <Col lg={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Title"
              variant="standard"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
          <Col lg={3}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Due Date"
              variant="standard"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-lg-center" style={{ marginTop: "5px" }}>
          <Col lg={3}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isCompleted}
              label="Status"
              name="isCompleted"
              onChange={(e) => {
                setIsCompleted(e.target.value);
              }}
            >
              <MenuItem value={false}>Incomplete</MenuItem>
              <MenuItem value={true}>Complete</MenuItem>
            </Select>
            {/* <TextField
            id="standard-basic"
            label="Status"
            variant="standard"
            name="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          /> */}
          </Col>
        </Row>
        <Row
          className="justify-content-lg-center"
          style={{ marginTop: "20px" }}
        >
          <Col lg={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                todoService
                  .addTodo({ title, date, isCompleted })
                  .then((data) => {
                    console.log(data);
                    navigate("/todos/1");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </Auth>
  );
}
