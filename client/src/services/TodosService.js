import GenericService from "./GenericService";
class TodosService extends GenericService {
  constructor() {
    super();
  }
  addTodo = (data) => this.post("tasks", data);
  deleteTodo = (_id) => this.delete("tasks/" + _id);
  updateTodo = (_id, data) => this.put("tasks/" + _id, data);
  getTodos = (page = 1, perPage = 10) =>
    this.get("tasks?page=" + page + "&perPage=" + perPage);
  getSingleTodo = (id) => this.get("tasks/" + id);
}

let todoService = new TodosService();
export default todoService;
