import { app } from "../index";
import { Client } from "../models/Client";
const request = require("supertest")

jest.mock("../models/Client", () => ({
  Client: {
    findAll: jest.fn().mockResolvedValue([
      { id: 1, name: "Client A" },
      { id: 2, name: "Client B" },
    ]),
    create: jest.fn().mockResolvedValue({ id: 3, name: "New Client" }),
    update: jest.fn().mockResolvedValue([3]),
    findOne: jest.fn().mockResolvedValue({ id: 3, name: "Updated Client" }),
    destroy: jest.fn().mockResolvedValue(1),
  },
}));

describe("Client Controller", () => {
  it("GET - should get all clients", async () => {
    const response = await request(app).get("/clients");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].id).toBe(1);
    expect(response.body[0].name).toBe("Client A");
    expect(response.body[1].id).toBe(2);
    expect(response.body[1].name).toBe("Client B");
  });
  it("POST - should create a new client", async () => {
    const newClient = { name: "New Client" };

    const response = await request(app)
      .post("/clients")
      .send(newClient)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe("New Client");

    expect(Client.create).toHaveBeenCalledWith(newClient);
  });
  it("PUT - should update an existing client", async () => {
    const updatedClient = { name: "Updated Client" };
    const clientId = 3;

    const response = await request(app)
      .put(`/clients/${clientId}`)
      .send(updatedClient)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(clientId);
    expect(response.body.name).toBe("Updated Client");

    expect(Client.update).toHaveBeenCalledWith(updatedClient, {
      where: { id: `${clientId}` },
    });
  });
  it("DELETE - should delete an existing client", async () => {
    const clientId = 1;

    const response = await request(app)
      .delete(`/clients/${clientId}`)
      .set("Accept", "application/json");

    expect(response.status).toBe(204);

    expect(Client.destroy).toHaveBeenCalledWith({
      where: { id: `${clientId}` },
    });
  });
});
