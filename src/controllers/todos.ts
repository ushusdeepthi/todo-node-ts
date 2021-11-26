import {RequestHandler} from 'express'
import { Todo } from '../models/todos'

let TodoList:Todo[] = [];

export const createTodo: RequestHandler = (req,res,next)=>{
    const text = (req.body as {text: string}).text;
    let highestId = 0;
    const latestItem = TodoList.forEach((item)=>{
    if(item.id > highestId){
      highestId = item.id;
    }
  })
  highestId++;
    const newTodo = new Todo(highestId, text)
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