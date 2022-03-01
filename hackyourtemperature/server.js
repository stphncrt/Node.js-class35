// const express = require("express");
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("<h1>hello from backend to frontend!!!</h1>");
});
app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;

    if (!cityName.cityName) {
        return res.status(400).json({ message: 'Please type any city name' })
    }
    res.send(cityName);
})
app.listen(PORT, () => console.log(`listening on port ${PORT}`));