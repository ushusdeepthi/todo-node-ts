import {RequestHandler} from 'express'
import { Todo } from '../models/todos'

const TodoList:Todo[] = [];

export const createTodo: RequestHandler = (req,res,next)=>{
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random(), text)
    TodoList.push(newTodo)
    res.status(201).json({todo:newTodo})
}
export const getTodos: RequestHandler = (req,res,next)=>{
    res.status(201).json({todo:TodoList})
}
