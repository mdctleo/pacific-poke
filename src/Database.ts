import {createPool} from "mysql";

export default class Database {
    public static TABLE_POKEMON = "Pokemon";
    public static COLUMN_POKEMON_NAME = "PokemonName";
    public database: any;

    constructor() {
        this.database = createPool({
            connectionLimit: 10,
            host: "localhost",
            user: "root",
            password: "root",
            database: "pacificpoke",
            multipleStatements: true
        });
    }

}
