require('dotenv').config();
const express = require('express');
const pokemonRoutes = require('./controllers/pokemonRoutes');

const app = express();

app.use(express.json());
app.use(pokemonRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});