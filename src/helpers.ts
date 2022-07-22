import {TodoStatus} from "./types";

export function todoStatusToTitleCase(status: TodoStatus): string {
    switch (status) {
        case "PARKED":
            return "Parked"
        case "DOING":
            return "Doing"
        case "DONE":
            return "Done"
        case "DUMPED":
            return "Dumped"
    }
}
