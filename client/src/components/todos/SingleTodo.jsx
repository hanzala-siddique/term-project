import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import todoService from "../../services/TodosService";

function SingleTodo({ todo, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <Button
          fullWidth
          onClick={(e) => {
            navigate("/todos/update/" + todo._id);
          }}
        >
          <EditIcon />
        </Button>
      </td>
      <td>
        <Button
          fullWidth
          onClick={(e) => {
            todoService
              .deleteTodo(todo._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <DeleteIcon />
        </Button>
      </td>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      {todo.isCompleted ? <td>Completed</td> : <td>Incomplete</td>}
    </tr>
  );
}

export default SingleTodo;
