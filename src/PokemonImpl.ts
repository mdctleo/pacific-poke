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

    public selectPokemonWithName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT * " +
                " FROM " + Database.TABLE_POKEMON + " WHERE " + Database.COLUMN_POKEMON_NAME + " = ?";
            this.con.query(sql, [name], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }

            });
        });
    }

    // SELECT
    // PokemonName
    // FROM
    // Pokemon
    // JOIN
    // PokemonHasTypes ON Pokemon.PID = PokemonHasTypes.PID
    // JOIN
    // PokemonHasMoves ON Pokemon.PID = PokemonHasMoves.PID
    // WHERE
    // PokemonHasTypes.TypeName = 'Fire' AND PokemonHasMoves.MoveName = 'Bite';
    public getPokemonWithTypeAndMove(type: string, move: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT " +
                "PokemonName " +
                "FROM " +
                "Pokemon " +
                "JOIN " +
                "PokemonHasTypes ON Pokemon.PID = PokemonHasTypes.PID " +
                "JOIN " +
                "PokemonHasMoves ON Pokemon.PID = PokemonHasMoves.PID " +
                "WHERE " +
                "PokemonHasTypes.TypeName = ? AND PokemonHasMoves.MoveName = ?;"
            this.con.query(sql, [type, move], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            });
        })
    }

    public getPokemartWithItem(itemName: string): Promise<any> {
        return new Promise((resolve, reject) => {
           let sql = "SELECT " +
               "PokemartSellsItems.BuildingName " +
               "FROM " +
               "Items " +
               "JOIN " +
               "PokemartSellsItems ON Items.IID = PokemartSellsItems.IID " +
               "WHERE " +
               "Items.ItemName = ?;";

            this.con.query(sql, [itemName], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            });

           });
    }

    public getPokemonsWithType(): Promise<any> {
        return new Promise((resolve, reject) => {
           let sql = "SELECT " +
               "COUNT(*), TypeName " +
               "FROM  " +
               "Pokemon " +
               "JOIN  " +
               "PokemonHasTypes ON PokemonHasTypes.PID = Pokemon.PID " +
               "GROUP BY " +
               "TypeName;";
           this.con.query(sql, (err: any, result: any) => {
              if (err) {
                  console.log(err);
                  reject(err);
              } else {
                  resolve(fmtTable(result));
              }
           });
        });
    }

    public getMoveWithName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT " +
                "* " +
                "FROM " +
                "Moves " +
                "WHERE " +
                "Moves.MoveName = ?;";
            this.con.query(sql, [name], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            });

        });
    }

    public getEvolutionWithId(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "CREATE OR REPLACE VIEW PokemonNameEvolutionsView AS SELECT " +
                "p1.PokemonName AS 'EvolveFromPokemonName', " +
                "p2.PokemonName AS 'EvolveToPokemonName', " +
                "PokemonEvolvesTo.AtLevel " +
                "FROM " +
                "Pokemon p1, " +
                "Pokemon p2, " +
                "PokemonEvolvesTo " +
                "WHERE " +
                "p1.PID = PokemonEvolvesTo.EvolveFromPID AND p2.PID = PokemonEvolvesTo.EvolveToPID;" +
                "SELECT " +
                "* " +
                "FROM " +
                "PokemonNameEvolutionsView " +
                "WHERE " +
                "PokemonNameEvolutionsView.EvolveFromPokemonName = '?';";
            this.con.query(sql, [name], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result[1]));
                }
            });

        });
    }

    public getView (): Promise<any> {
        return new Promise((resolve, reject) => {
           let sql = "CREATE OR REPLACE VIEW PokemonNameEvolutionsView AS SELECT " +
               "p1.PokemonName AS 'EvolveFromPokemonName', " +
               "p2.PokemonName AS 'EvolveToPokemonName', " +
               "PokemonEvolvesTo.AtLevel " +
               "FROM " +
               "Pokemon p1, " +
               "Pokemon p2, " +
               "PokemonEvolvesTo " +
               "WHERE " +
               "p1.PID = PokemonEvolvesTo.EvolveFromPID AND p2.PID = PokemonEvolvesTo.EvolveToPID;";
            this.con.query(sql, [name], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            });
        });
    }

    public getItemsSoldAtEveryPokemart(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT IID, ItemName " +
                "FROM Items i " +
                "WHERE NOT EXISTS " +
                "    (SELECT * FROM Pokemart p " +
                "     WHERE NOT EXISTS " +
                "         (SELECT psi.IID " +
                "          FROM PokemartSellsItems psi " +
                "          WHERE i.IID=psi.IID " +
                "              AND p.BuildingName=psi.BuildingName));";
            this.con.query(sql, [id], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public getLocationsPokemonAppearsIn(): Promise<any> {
        return new Promise((resolve, reject) => {
           let sql = "SELECT PokemonID, COUNT(*) " +
               "FROM Encounters " +
               "GROUP BY PokemonID " +
               "ORDER BY COUNT(*) DESC;";
            this.con.query(sql, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            });
        });
    }

    public insertItem(itemId: number, name: string, effect: string, cost: number): Promise<any> {
        return new Promise((resolve, reject) => {
            // INSERT INTO Items VALUES (30, 'Leo Item', 'makes you leo', 300);
            let sql = "INSERT INTO Items VALUES (?, ?, ?, ?);" +
                "SELECT * FROM Items;";
            this.con.query(sql, [itemId, name, effect, cost], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result[1]));
                }
            });
        });
    }

    public deleteBuilding(bId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            // DELETE FROM Buildings WHERE BID = 0;
            let sql = "DELETE FROM Buildings WHERE BID = ?;";
            this.con.query(sql, [bId], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result));
                }
            })
        });
    }

    public updateGymLeader(leaderName: string, gymId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE Gym SET Gym.LeaderName = ? WHERE Gym.BID = ?;" +
                "SELECT * FROM Gym";
            this.con.query(sql, [leaderName, gymId], (err: any, result: any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(fmtTable(result[1]));
                }
            });
        })
    }
}