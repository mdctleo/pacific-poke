import {expect} from "chai";
import PokemonImpl from "../src/PokemonImpl";

describe("pokemon operations", () => {
    it("Should squirt", async () => {

        let response = null;

        try {
            let pokemonImpl: PokemonImpl = new PokemonImpl();
            response = await pokemonImpl.selectPokemonWithName("Squirtle");
        } catch (err) {
            response = err;
        } finally {
            expect(response).to.deep.equal("Squirtle");
        }
    });
});
