const mongoose = require('./connection');

const pokemonSchema = new mongoose.Schema({
    id: String,
    name: String,
    img: String,
    stats: {
        hp: String, 
        attack: String,
        defense: String,
        spattack: String,
        spdefense: String,
        speed: String
    },
    type: [String]
});


const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
module.exports = PokemonModel;