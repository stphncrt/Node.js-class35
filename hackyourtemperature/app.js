import express from "express";
import fetch from "node-fetch";
import keys from "./sources/keys.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("<h1>hello from backend to frontend!!!</h1>");
});

app.post("/weather", async (req, res) => {
	let cityName = req.body.cityName;
	if (!cityName) {
		res.status(400).json({ weatherText: "City is not found!" });
	} else {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys.API_KEY}`,
			);
			const data = await response.json();
			return res.status(200).json({ weatherText: `${cityName}: ${data.main.temp}C` });
		} catch (err) {
			res.status(400).json({ error: err.message });
		}
	}
});

export default app;
