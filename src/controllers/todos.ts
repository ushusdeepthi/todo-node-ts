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
export const updateTodo: RequestHandler<{id:number}> = (req,res,next)=>{
    const id = req.params.id;
    const updatedText = (req.body as {text:string}).text
    const updatedTodo = new Todo(id,updatedText)
    TodoList.map((todo)=>(todo.id === id ? updatedTodo:todo))
    res.status(201).json({todo:updatedTodo})
}