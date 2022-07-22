import { model, Schema } from "mongoose";
import {Todo, TodoStatuses} from "./types";

const TodoSchema = new Schema<Todo>({
    title: String,
    description: String,
    status: {
        type: String,
        enum: TodoStatuses,
        default: TodoStatuses[0]
    }
})

export default model<Todo>("TodoModel", TodoSchema)
