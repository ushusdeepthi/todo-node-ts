import {RequestHandler} from 'express'
import { Todo } from '../models/todos'

let TodoList:Todo[] = [];

export const createTodo: RequestHandler = (req,res,next)=>{
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.floor(Math.random()*1000), text)
    TodoList.push(newTodo)
    res.status(201).json({todo:newTodo})
}
export const getTodos: RequestHandler = (req,res,next)=>{
    res.status(201).json({todo:TodoList})
}
export const updateTodo: RequestHandler<{id:number}> = (req,res,next)=>{
    const id = Number(req.params.id);
    const updatedText = (req.body as {text:string}).text
    const updatedTodo = new Todo(id,updatedText)
    TodoList = TodoList.map((todo)=>todo.id == id ? updatedTodo : todo)
    res.status(201).json({todo:updatedTodo})
}
export const deleteTodo: RequestHandler<{id:number}> = (req,res,next)=>{
    const id = Number(req.params.id);
    TodoList = TodoList.filter((todo=>todo.id !== id ))
    res.status(201).json({todo:TodoList})
}