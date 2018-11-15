import PokemonImpl from "./PokemonImpl";

let express = require('express');
let router = express.Router();
let pokemonImpl = new PokemonImpl();

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {
    res.render('index', { title: 'Express' });
});

// SELECT * FROM Pokemon WHERE Pokemon.PokemonName = ?;
router.get('/getPokemonWithName/:name', (req: any, res: any, next: any) => {
    pokemonImpl.selectPokemonWithName(req.params.name)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// SELECT all Pokemon names that are fire-type that have the move “Bite”.
router.get('/getPokemonWithTypeAndMove/:type/:move', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.selectPokemonWithName(req.params.move)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// SELECT all Pokemarts where “FireStone” is sold.This query would join 6 tables including Locations, Buildings, Pokemart, PokemartSellsItems, Items and Stone. Used by Pokemon Trainers.
router.get('/getPokemartWithItem/:item', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.selectPokemonWithName(req.params.item)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// SHOW how many pokemons of each type exist in the database.
router.get('/getPokemonsWithType', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.selectPokemonWithName(req.params.type)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// SELECT Moves.Effect FROM Moves WHERE Moves.MoveName = ?;
router.get('/getMoveWithName/:name', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.selectPokemonWithName(req.params.name)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// SELECT PokemonEvolvesTo.EvolveToPID FROM PokemonEvolvesTo WHERE PokemonEvolvesTO.EvolveFromPID = ?;
router.get('/getEvolutionWithId/:id', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.selectPokemonWithName(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

// A Division Query: Get the IID and ItemName of items that are sold at every pokemart.
router.get('/getItemsSoldAtEveryPokemart/:id', (req: any, res: any, next: any) => {

});

// INSERT a new item with its name, effect, cost and which Pokemart it’s sold in, used by Pokemart Inc.
router.post('/newItem', (req: any, res: any) => {
    // TODO: replace with actual implementation
    // parameters should be req.body.name, req.body.effect, req.body.cost, req.body.pokemart

});

// DELETE a building WHERE it’s ID matches the buildings ID to be deleted. For example, if it has been demolished. Used by Pokemon Scholar.
router.delete('/deleteBuilding', (req: any, res: any) => {
    // TODO: replace with actual implementation
    // parameters should be req.body.id
});

// UPDATE a Gym’s gym leader name WHERE the ID matches the gym’s ID to updated. For example, if the gym leader passes away, goes on parental leave or is relieved of their position. Used by Gym Owners.
router.put('/updateGymLeader', (req: any, res: any) => {
    //TODO: replace with actual implementation
    // parameters should be req.body.id
});

// CREATE VIEW for Pokemon( Pokemon ID, Pokemon Name), PokemonEvolvesTo( Pokemon Evolve From, Pokemon Evolve To, At Level)
router.get('/view', (req: any, res: any) => {
   // no request parameters for this one, we passed all tuples from this temporary table
   // to frontend, where it will be display in a table-like style;
});
module.exports = router;
