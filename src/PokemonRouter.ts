import PokemonImpl from "./PokemonImpl";

let express = require('express');
let router = express.Router();
let pokemonImpl = new PokemonImpl();

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {
    res.render('index', { title: 'Express' });
});

// SELECT * FROM Pokemon
router.get('/all/:name', (req: any, res: any, next: any) => {
    pokemonImpl.selectAll(req.params.name)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
    }
);

// SELECT * FROM Pokemon WHERE Pokemon.PokemonName = ?;
router.get('/getPokemonWithName/:name', (req: any, res: any, next: any) => {
    pokemonImpl.selectPokemonWithName(req.params.name)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// SELECT all Pokemon names that are fire-type that have the move “Bite”.
router.get('/getPokemonWithTypeAndMove/:type/:move', (req: any, res: any, next: any) => {
    pokemonImpl.getPokemonWithTypeAndMove(req.params.type, req.params.move)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// SELECT all Pokemarts where “FireStone” is sold.This query would join 6 tables including Locations, Buildings, Pokemart, PokemartSellsItems, Items and Stone. Used by Pokemon Trainers.
router.get('/getPokemartWithItem/:item', (req: any, res: any, next: any) => {
    pokemonImpl.getPokemartWithItem(req.params.item)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// SHOW how many pokemons of each type exist in the database.
router.get('/getNumberOfPokemonWithType', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.getPokemonsWithType()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// SELECT Moves.Effect FROM Moves WHERE Moves.MoveName = ?;
router.get('/getMoveWithName/:name', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.getMoveWithName(req.params.name)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// SELECT PokemonEvolvesTo.EvolveToPID FROM PokemonEvolvesTo WHERE PokemonEvolvesTO.EvolveFromPID = ?;
router.get('/getEvolutionWithPokemon/:id', (req: any, res: any, next: any) => {
    // TODO: replace with actual implementation
    pokemonImpl.getEvolutionWithId(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// A Division Query: Get the IID and ItemName of items that are sold at every pokemart.
router.get('/getItemsSoldAtEveryPokemart/:id', (req: any, res: any, next: any) => {
    pokemonImpl.getItemsSoldAtEveryPokemart(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });

});

// INSERT a new item with its name, effect, cost and which Pokemart it’s sold in, used by Pokemart Inc.
router.post('/insertItem', (req: any, res: any) => {
    pokemonImpl.insertItem(req.body.ID, req.body.ItemName, req.body.Effect, req.body.Cost)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// DELETE a building WHERE it’s ID matches the buildings ID to be deleted. For example, if it has been demolished. Used by Pokemon Scholar.
router.delete('/deleteBuilding', (req: any, res: any) => {
    pokemonImpl.deleteBuilding(req.body.BuildingName)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// UPDATE a Gym’s gym leader name WHERE the ID matches the gym’s ID to updated. For example, if the gym leader passes away, goes on parental leave or is relieved of their position. Used by Gym Owners.
router.put('/updateGymLeaderName', (req: any, res: any) => {
    pokemonImpl.updateGymLeaderName(req.body.LeaderName, req.body.BuildingName)
        .then((result) => {
            console.log(result)
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// CREATE VIEW for Pokemon( Pokemon ID, Pokemon Name), PokemonEvolvesTo( Pokemon Evolve From, Pokemon Evolve To, At Level)
router.get('/view', (req: any, res: any) => {
   // no request parameters for this one, we passed all tuples from this temporary table
   // to frontend, where it will be display in a table-like style;
    pokemonImpl.getView()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

router.get('/getLocationsPokemonAppearsIn', (req: any, res: any) => {
    pokemonImpl.getLocationsPokemonAppearsIn()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});
module.exports = router;
