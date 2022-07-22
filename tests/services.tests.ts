import {connect, disconnect} from "mongoose";
import { getMockReq, getMockRes } from '@jest-mock/express'
import {Todo} from "../src/types";
import {saveNewTodo} from "../src/services";

describe("[services] Service Tests", () => {
    beforeAll(async () => {
        await connect(process.env.DATABASE_URL ?? "mongodb://127.0.0.1:27017/rc")
    });

    afterAll(async () => {
        await disconnect()
    })

    describe("saveNewTodo", () => {
        it('should save new Todo', function () {
            const req = getMockReq({body: <Todo>{
                    title: "bersihin kamar",
                    description: "sapu, pel kamarnya woi",
                    status: "PARKED"
            }})
            const expectedMockRes = getMockRes({
                statusCode: 200
            })
            const actualRes = getMockRes()

            saveNewTodo(req, actualRes.res)
            expect(actualRes.res.status).toBe(expectedMockRes.res.status)
        });
    })
})
