"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TodoList = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random(), text);
    TodoList.push(newTodo);
    res.status(201).json({ todo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(201).json({ todo: TodoList });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const updatedText = req.body.text;
    const updatedTodo = new todos_1.Todo(id, updatedText);
    TodoList.map((todo) => (todo.id === id ? updatedTodo : todo));
    res.status(201).json({ todo: updatedTodo });
};
exports.updateTodo = updateTodo;
