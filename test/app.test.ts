import request from "supertest";
import app from "../src/app";

describe("API testing ...", () => {
  test("GET / ", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Express + TypeScript Server" });
  });

  test("GET /name should return 200 status", async () => {
    const res = await request(app).get("/name");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello World");
  });
});
