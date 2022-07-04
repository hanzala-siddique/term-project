const Joi = require("@hapi/joi");
const mongoose = require("mongoose");


const taskSchema = mongoose.Schema({
    title: String,
    date: String,
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model("Task", taskSchema);

function validateTask(data) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(100).required(),
        date: Joi.string().min(0).required(),
        isCompleted: Joi.boolean().required(),
    });
    return schema.validate(data);
}
module.exports.Task = Task;
module.exports.validate = validateTask;