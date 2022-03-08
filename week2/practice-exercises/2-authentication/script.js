/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

import express from "express";
import fetch from "node-fetch";
const port = 3000;
const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books";

function printBooks() {
	const app = express();
	app.get("/", async (req, res) => {
		try {
			const response = await fetch(url, {
				headers: { Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ==" },
			});
			const book = await response.json();
			res.send(book);
		} catch (err) {
			console.log(err);
		}
	});

	app.listen(port, () => {
		console.log("Server initialized");
	});
}

printBooks();
