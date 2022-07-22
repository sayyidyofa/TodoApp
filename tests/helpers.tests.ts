import {TodoStatus} from "../src/types";
import {todoStatusToTitleCase} from "../src/helpers";

describe("[helpers] Helper Functions", () => {
    describe("todoStatusToTitleCase", () => {
        it('should return Done given input DONE', function () {
            const doneStatus: TodoStatus = "DONE"
            const actual = todoStatusToTitleCase(doneStatus)
            const expected = "Done"
            expect(actual).toStrictEqual(expected)
        });
    })
})
