import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import { Table, Row, Col } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import todoService from "../../services/TodosService";
import Auth from "../auth/Auth";
import { Pagination } from "@material-ui/lab";

function Todos(props) {
  const params = useParams();
  console.log(params.page);
  const page = params.page ? params.page : 1;
  console.log(page);
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const getData = () => {
    todoService
      .getTodos(page, perPage)
      .then((data) => {
        setTodos(data.tasks);
        setTotal(data.total);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getData, [page, perPage]);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/todos/add");
  };

  return (
    <Auth>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.length == 0 ? (
              <p>There are no todos</p>
            ) : (
              todos.map((todo, index) => (
                <SingleTodo key={index} todo={todo} onDelete={getData} />
              ))
            )}
          </tbody>
        </Table>
      </div>
      <Row>
        <Col lg={12} style={{ marginLeft: "30px" }}>
          <Pagination
            count={Math.ceil(total / perPage)}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              console.log(value);
              navigate("/todos/" + value);
            }}
          />{" "}
          Total: {total} Showing {(page - 1) * perPage + 1} to{" "}
          {(page - 1) * perPage + todos.length}
        </Col>
      </Row>
      <Row
        className="text-center"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <Col lg={12}>
          <Button
            onClick={handleAdd}
            size="large"
            variant="contained"
            color="primary"
          >
            Add a New Todo
            <AddCircleIcon fontSize="large" />
          </Button>
        </Col>
      </Row>
    </Auth>
  );
}

export default Todos;
