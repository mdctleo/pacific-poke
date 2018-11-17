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

  getTableForDropdownSelection(selection) {
    switch(selection) {
      case 'insertItem':
        return 'all/Items';
      case 'deleteBuilding':
        return 'all/Buildings';
      case 'updateGymLeaderName':
        return 'all/Gym';
      case 'getPokemartsWithItemName':
        return 'all/Pokemart'
      case 'getLocationsPokemonAppearsIn':
        return 'getLocationsPokemonAppearsIn'
      case 'getItemsSoldAtEveryPokemart':
        return 'getItemsSoldAtEveryPokemart'
      default:
        if (selection.includes('Pokemon')) {
          return 'all/Pokemon'
        }
        throw ('[getTableForDropdownSelection] invalid selection:', selection)
    }
  }

  convertToEndpoint(selection) {
    const url = `http://localhost:3006/${this.getTableForDropdownSelection(selection)}`;
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(result => this.setState(result))
      .catch(err => console.error(err));
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
      "getLocationsPokemonAppearsIn",
      "getItemsSoldAtEveryPokemart"
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
