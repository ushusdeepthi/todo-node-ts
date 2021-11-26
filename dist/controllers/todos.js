"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
let TodoList = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    let highestId = 0;
    const latestItem = TodoList.forEach((item) => {
        if (item.id > highestId) {
            highestId = item.id;
        }
    });
    highestId++;
    const newTodo = new todos_1.Todo(highestId, text);
    TodoList.push(newTodo);
    res.status(201).json({ todo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(201).json({ todo: TodoList });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = Number(req.params.id);
    const updatedText = req.body.text;
    const updatedTodo = new todos_1.Todo(id, updatedText);
    TodoList = TodoList.map((todo) => todo.id == id ? updatedTodo : todo);
    res.status(201).json({ todo: updatedTodo });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = Number(req.params.id);
    TodoList = TodoList.filter((todo => todo.id !== id));
    res.status(201).json({ todo: TodoList });
};
exports.deleteTodo = deleteTodo;
