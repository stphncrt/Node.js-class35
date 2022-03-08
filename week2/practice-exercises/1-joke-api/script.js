/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
import express from 'express';
import fetch from 'node-fetch';
const PORT = 3000;
const url = 'http://api.icndb.com/jokes/random?firstName=John&lastName=Doe';
const url2 = 'http://api.icndb.com/jokes/random/10';

function printChuckNorrisJoke() {
    const app = express();

    app.get('/', async(req, res) => {
        const response = await fetch(url)
        const joke = await response.json();
        res.json(joke);
    })

    app.listen(PORT, () => {
        console.log(`server initiated on ${PORT}`);
    })

}

printChuckNorrisJoke();