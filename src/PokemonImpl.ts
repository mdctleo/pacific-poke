import Database from "./Database";

function fmtTable(result: any): Object {
    let columns = []
    for (let column in result[0]) {
        columns.push({Header: column, accessor: column});
    }
    return { tableColumns: columns, tableData: result };
}

export default class PokemonImpl {
    private db: any;
    private con: any;
    constructor() {
        this.db = new Database();
        this.con = this.db.database;
    }

    public selectAll(): Promise<Object> {
        let sql = 'SELECT * FROM Pokemon';
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            })
        });
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