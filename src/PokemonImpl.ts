import Database from "./Database";

export default class PokemonImpl {
    private db: any;
    private con: any;
    constructor() {
        this.db = new Database();
        this.con = this.db.database;
    }

    public selectPokemonWithName(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT " + Database.COLUMN_POKEMON_NAME +
                " FROM " + Database.TABLE_POKEMON + " WHERE " + Database.COLUMN_POKEMON_NAME + " = ?";
            this.con.query(sql, [name], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {

                    resolve(result[0].PokemonName);
                }

            });
        });
    }
}