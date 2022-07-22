import express from "express"
import Router from "./routes"
import {SERVER_PORT} from "./constants"

export const server = express()

server.use("/", Router)

server.listen(SERVER_PORT, () => {
    console.log(`Server has started at port ${SERVER_PORT}`)
})
