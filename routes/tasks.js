const express = require("express");
let router = express.Router();
const validateTask = require("../middlewares/validateTask");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
var { Task } = require("../models/task");
//get products
router.get("/tasks", async (req, res) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let tasks = await Task.find().skip(skipRecords).limit(perPage);
  let total = await Task.countDocuments();
  return res.send({ total, tasks });
});
//get single products
router.get("/tasks/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task)
      return res.status(400).send("task With given ID is not present"); //when id is not present id db
    return res.send(task); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/tasks/:id", validateTask, async (req, res) => {
  let task = await Task.findById(req.params.id);
  task.title = req.body.title;
  task.date = req.body.date;
  task.isCompleted = req.body.isCompleted;
  await task.save();
  return res.send(task);
});
//update a record
router.delete("/tasks/:id", async (req, res) => {
  let task = await Task.findByIdAndDelete(req.params.id);
  return res.send(task);
});
//Insert a record
router.post("/tasks", validateTask, async (req, res) => {
  let task = new Task();
  task.title = req.body.title;
  task.date = req.body.date;
  task.isCompleted = req.body.isCompleted;
  await task.save();
  return res.send(task);
});
module.exports = router;