import React, {Component} from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.css";
import QueryInput from "./components/queryInput.jsx";
import {Grid, Row, Col} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableColumns: [],
            tableData: [],
            formLabels: [],
            buttonLabel: "Refresh",
            selected: "Pokemon",
            onButtonClick: () => {
            },
            onButtonClickOptions: {}
        };
    }

    getRequiredFormInfo(table) {
        switch (table) {
            case "insertItem":
                return [["ID", "ItemName", "Effect", "Cost"], "Insert Item", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'}
                }];

            case "deleteBuilding":
                return [["BuildingName"], "Delete Building", {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'}
                }];

            case "updateGymLeaderName":
                return [["BuildingName", "LeaderName"], "Update Gym Leader", {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'}
                }];

            case "getPokemonWithTypeAndMove":
                return [["Type Name", "Move Name"], "Get Pokemon", {}];

            case "getPokemartsWithItemName":
                return [["Item Name"], "Get Pokemarts", {}];

            case "getPokemonWithName":
                return [["Pokemon Name"], "Get Pokemon", {}];

            case "getPokemonWithMove":
                return [["Move Name"], "Get Pokemon", {}];

            case "getEvolvedFormWithPokemonName":
                return [["Pokemon Name"], "Get Pokemon's Evolved Form", {}];

            case "getMoveWithMoveName":
                return [["Move Name"], "Get Move", {}]
            default:
                return [[], "Refresh", {}];
        }
    }

    getEndpointForDropdownSelection(selection) {
        switch (selection) {
            case 'insertItem':
                return 'all/Items';
            case 'deleteBuilding':
                return 'all/Buildings';
            case 'updateGymLeaderName':
                return 'all/Gym';
            case 'getPokemartsWithItemName':
                return 'all/Pokemart';
            case 'getMoveWithMoveName':
                return 'all/Moves';
            case 'getNumberOfLocationsPokemonAppearsIn':
                return 'getNumberOfLocationsPokemonAppearsIn';
            case 'getItemsSoldAtEveryPokemart':
                return 'getItemsSoldAtEveryPokemart';
            default:
                if (selection.includes('Pokemon')) {
                    return 'all/Pokemon'
                }
                throw ('[getTableForDropdownSelection] invalid selection:', selection)
        }
    }

    _onSelect = selection => {
        console.log('selected', selection);
        let requiredFormInfo = this.getRequiredFormInfo(selection.value);
        this.setState({
            selected: selection.value,
            formLabels: requiredFormInfo[0],
            buttonLabel: requiredFormInfo[1],
            onButtonClickOptions: requiredFormInfo[2]
        });
        this.convertToEndpoint(selection.value);
    };

    convertToEndpoint(selection) {
        const url = `http://localhost:3006/${this.getEndpointForDropdownSelection(selection)}`;
        fetch(url, {
            method: "GET"
        })
            .then(reponse => reponse.json())
            .then(result => this.setState(result))
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this._onSelect({value: this.state.selected})
    }

    render() {
        const options = [
            "Pokemon",
            "insertItem",
            "deleteBuilding",
            "updateGymLeaderName",
            "getPokemartsWithItemName",
            "getPokemonWithName",
            "getPokemonWithMove",
            "getPokemonWithTypeAndMove",
            "getEvolvedFormWithPokemonName",
            "getMoveWithMoveName",
            "getNumberOfLocationsPokemonAppearsIn",
            "getItemsSoldAtEveryPokemart"
        ];

        return (
            <React.Fragment>
                <Grid fluid className="grid-settings">
                    <Row className="show-grid">
                        <Col md={12} offset={{ md: 12 }}>
                            <h1>Pacific Poke ✨</h1>
                        </Col>
                    </Row>
                    <Row className="show-grid query-input">
                        <Col md={12} offset={{ md: 12 }}>
                            <QueryInput
                                className="input-box"
                                selected={this.state.selected}
                                formLabels={this.state.formLabels}
                                buttonLabel={this.state.buttonLabel}
                                onButtonClick={this.setState.bind(this)}
                                onButtonClickOptions={this.state.onButtonClickOptions}
                            />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                          <Col xs={12} md={3}>
                            <Dropdown
                                    className="dropdown"
                                    options={options}
                                    onChange={this._onSelect}
                                    value={this.state.selected}
                                    placeholder="Select an option"
                            />
                         </Col>
                        <Col xs={12} md={9}>
                            <ReactTable
                                className="table -striped -highlight"
                                columns={this.state.tableColumns}
                                data={this.state.tableData}
                                defaultPageSize={10}
                                noDataText={"No more data to display."}
                            />
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
