const mongoose = require('./connection');
const pokemonData = require('./seedData');
const PokemonModel = require('./pokemon'); // this is model need to tell Mongo db what and how to add things into the db


mongoose.connection.on('open', async () => {
    const scrubbedData = pokemonData.map( arlo => {
        return {
            id: arlo.id,
            name: arlo.name,
            img: arlo.img,
            type: arlo.type,
            stats: arlo.stats 
        }
});

    // Delete all the pokemon records in the db
    await PokemonModel.deleteMany({});

    //  Using the scrubbed Data we will insert these records into the db.
    await PokemonModel.create(scrubbedData); 

    // We want to close out the connection AFTER all the data has been added.
        mongoose.connection.close();
});
