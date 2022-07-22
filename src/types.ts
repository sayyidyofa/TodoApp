export type Todo = {
    title: string,
    description: string,
    status: TodoStatus
}

export type TodoStatus = typeof TodoStatuses[number]

export const TodoStatuses = [
    "PARKED",
    "DOING",
    "DONE",
    "DUMPED"
] as const
