import {Todo} from "./types";
import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import TodoModel from "./db";


export async function saveNewTodo(req: ExpressRequest, res: ExpressResponse): Promise<void> {
    const newTodo: Todo = <Todo>(req.body)

    new TodoModel(newTodo).save()
        .then(res.json)
        .catch(reason => {
            res.status(500).json(reason)
        })
}

export async function readAllTodos(req: ExpressRequest, res: ExpressResponse): Promise<void> {
    const query: Partial<Todo> = <Partial<Todo>>(req.params)
    TodoModel.find(query).exec((error, result) => {
        if (error !== undefined && error !== null) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    })
}
