import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import QueryInput from "./components/queryInput.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableColumns: [],
      tableData: [],
      formLabels: [],
      buttonLabel: "",
      selected: "pokemon"
    };
  }

  componentDidMount() {
    const url = "http://localhost:3006/pokemon";
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(result => this.setState(result));
  }

  getRequiredFormInfo(table) {
    switch (table) {
      case "insertItems":
        return [["ID", "Name", "Effect", "Cost"], "Insert"];

      case "deleteBuilding":
        return [["BuildingName"], "Delete"];

      case "updateGymLeaderName":
        return [["LeaderName", "BuildingName"], "Update"];

      case "getPokemonWithMoveAndType":
        return [["TypeName", "MoveName"], "Select"];

      case "selectPokemartsByItem":
        return [["Item Name"], "Select"];

      case "getPokemonWithName":
        return [["Pokemon Name"], "Select"];

      case "getPokemonWithMove":
        return [["Move Name"], "Select"];

      case "getEvolvedFormWithPokemonName":
        return [["Pokemon Name"], "Get Evolved Form"];

      default:
        return [[], 'Select']
    }
  }

  _onSelect = selection => {
    console.log(selection);
    let formAndButtonLabels = this.getRequiredFormInfo(selection.value);
    this.setState({
      selected: selection.value,
      formLabels: formAndButtonLabels[0],
      buttonLabel: formAndButtonLabels[1]
    });
  };

  render() {
    const options = [
      "pokemon",
      "items",
      "buildings",
      "locations",
      "types",
      "moves",
      "insertItems",
      "deleteBuilding",
      "updateGymLeaderName",
      "getPokemonWithMoveAndType",
      "selectPokemartsByItem",
      "getPokemonWithName",
      "getPokemonWithMove",
      "getEvolvedFormByPokemonName"
    ];

    return (
      <div>
        <Dropdown
          className="interested"
          options={options}
          onChange={this._onSelect}
          value={this.state.selected}
          placeholder="Select an option"
        />
        <ReactTable
          columns={this.state.tableColumns}
          data={this.state.tableData}
          defaultPageSize={10}
          noDataText={"No more data to display."}
        />
        <QueryInput
          selected={this.state.selected}
          formLabels={this.state.formLabels}
          buttonLabel={this.state.buttonLabel}
          onButtonClick={this.setState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
