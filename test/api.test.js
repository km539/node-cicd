const request = require("supertest");
const app = require("../app");

describe("API testing ...", () => {
  test("GET /name should return 200 status", async () => {
    const res = await request(app).get("/name");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello World");
  });
});
