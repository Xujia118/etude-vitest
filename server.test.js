import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./server";

describe("API Endpoints", () => {
  it("GET /api/hello should return a welcome message", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, world!" });
  });

  it("POST /api/users should return a new user", async () => {
    const newUser = { name: "John", email: "john@email.com" };
    const response = await request(app).post("/api/users").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: newUser.name,
      email: newUser.email,
    });
  });
});
