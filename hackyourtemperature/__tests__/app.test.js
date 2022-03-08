import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /weather", () => {
	//In cases of city is available
	test("200 status code for correct city name", async () => {
		const response = await request.post("/weather").send({ cityName: "Alkmaar" });
		expect(response.statusCode).toBe(200);
	});
	test("json in the content type header", async () => {
		const response = await request.post("/weather").send({ cityName: "Alkmaar" });
		expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
	});
	test("should respond weather result", async () => {
		const response = await request.post("/weather").send({ cityName: "Alkmaar" });
		expect(response.body.weatherText).toBeDefined();
	});

	// In cases of city is not available
	test("should respond with a 400 status code if empty object send", async () => {
		const response = await request.post("/weather").send({});
		expect(response.statusCode).toBe(400);
	});
	test("should respond with a 400 status code for not found city name", async () => {
		const response = await request.post("/weather").send({ cityName: "ijoiorj" });
		expect(response.statusCode).toBe(400);
	});
});
