import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import todoService from "../../services/TodosService";

export default function UpdateTodo(props) {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  useEffect(() => {
    todoService.getSingleTodo(params.id).then((data) => {
      setTitle(data.title);
      setDate(data.date);
      setIsCompleted(data.isCompleted);
    });
  }, []);

  return (
    <Container style={{ marginTop: "150px" }}>
      <Row className="text-center" style={{ marginTop: "5px" }}>
        <Col lg={12}>
          <h1>Update Todo</h1>
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
            fullWidth
            id="standard-basic"
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
      <Row className="justify-content-lg-center" style={{ marginTop: "20px" }}>
        <Col lg={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              todoService
                .updateTodo(params.id, { title, date, isCompleted })
                .then((data) => {
                  console.log(data);
                  navigate("/todos/1");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
