import {json, Router} from 'express';
import {readAllTodos, saveNewTodo} from "./services";

const router = Router()

router.post("/todos", json(), saveNewTodo)

router.get("/todos", readAllTodos)

router.get("/", (req, res) => {
    res.send("TodoApp API Root")
})

export default router
