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
      buttonLabel: "Refresh",
      selected: "Pokemon",
      onButtonClick: () => {},
      onButtonClickOptions: {}
    };
  }

  componentDidMount() {
    this._onSelect({value: this.state.selected})
  }

  /*
  callEndpoint() {
    const url = `http://localhost:3006/all/${this.state.selected.value}`;
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(result => this.setState(result));
  }
  */

  getRequiredFormInfo(table) {
    switch (table) {
      // Tested that the 3 modifiers work.
      case "insertItem":
        return [["ID", "ItemName", "Effect", "Cost"], "Insert Item", {method: 'POST', headers: {'Content-Type': 'application/json'}}];

      case "deleteBuilding":
        return [["BuildingName"], "Delete Building", {method: 'DELETE', headers: {'Content-Type': 'application/json'}}];

      case "updateGymLeaderName":
        return [["BuildingName", "LeaderName"], "Update Gym Leader", {method: 'PUT', headers: {'Content-Type': 'application/json'}}];

      // TODO: The way I've done it so far is that the button names
      //       should map to the body expected in the backend.
      case "getPokemonWithMoveAndType":
        return [["TypeName", "MoveName"], "Get Pokemon", {}];

      case "selectPokemartsByItem":
        return [["Item Name"], "Get Pokemarts", {}];

      case "getPokemonWithName":
        return [["Pokemon Name"], "Get Pokemon", {}];

      case "getPokemonWithMove":
        return [["Move Name"], "Get Pokemon", {}];

      case "getEvolvedFormWithPokemonName":
        return [["Pokemon Name"], "Get Pokemon's Evolved Form", {}];

      default:
        return [[], "Refresh", {}];
    }
  }

  _onSelect = selection => {
    console.log(selection);
    let requiredFormInfo = this.getRequiredFormInfo(selection.value);
    this.setState({
      selected: selection.value,
      formLabels: requiredFormInfo[0],
      buttonLabel: requiredFormInfo[1],
      onButtonClickOptions: requiredFormInfo[2]
    });
    // put into a different method
    console.log(selection.value);
    this.convertToEndpoint(selection.value);
    console.log("ran convert to endpoint");

    let method = requiredFormInfo[2]['method']
    if (method && (method === 'DELETE')) {
      // DELETE should use client side logic to render
      // because backend doesn't return back the new table.
      this.onButtonClick = (_) => this.convertToEndpoint(this.state.selected);
    } else {
      // Set our table to the data fetched by child component.
      this.onButtonClick = this.setState.bind(this);
    }
  };

  convertToEndpoint(selection) {
    if (selection === "Pokemon") {
      const url = "http://localhost:3006/all/Pokemon";
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (selection === "insertItem") {
      const url = `http://localhost:3006/all/Items`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (selection === "deleteBuilding") {
      const url = `http://localhost:3006/all/Buildings`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (selection === "updateGymLeaderName") {
      const url = `http://localhost:3006/all/Gym`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (
      selection === "getPokemonWithMoveAndType" ||
      selection === "getPokemonWithName" ||
      selection === "getPokemonWithMove" ||
      selection === "getEvolvedFormByPokemonName"
    ) {
      const url = `http://localhost:3006/all/Pokemon`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (selection === "selectPokemartsByItem") {
      const url = `http://localhost:3006/all/Pokemart`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
    if (selection === "getLocationsPokemonAppearsIn") {
      const url = `http://localhost:3006/all/Locations`;
      fetch(url, {
        method: "GET"
      })
        .then(reponse => reponse.json())
        .then(result => this.setState(result));
    }
  }

  render() {
    const options = [
      "Pokemon",
      "insertItem",
      "deleteBuilding",
      "updateGymLeaderName",
      "selectPokemartsByItem",
      "getPokemonWithName",
      "getPokemonWithMove",
      "getPokemonWithMoveAndType",
      "getEvolvedFormByPokemonName",
      "getLocationsPokemonAppearsIn"
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
          onButtonClick={this.onButtonClick}
          onButtonClickOptions={this.state.onButtonClickOptions}
        />
      </div>
    );
  }
}

export default App;
