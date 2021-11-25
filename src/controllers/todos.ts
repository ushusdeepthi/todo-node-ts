import {RequestHandler} from 'express'
import { Todo } from '../models/todos'

const TODOS = [];

export const createTodo: RequestHandler = (req,res,next)=>{
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random(), text)
    TODOS.push(newTodo)
    res.status(201).json({todo:newTodo})
}