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
    const url = "http://localhost:3006/all/Pokemon";
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(result => this.setState(result));
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
      case "insertItem":
        return [["ID", "Name", "Effect", "Cost"], "Insert Item"];

      case "deleteBuilding":
        return [["BuildingName"], "Delete Building"];

      case "Gym":
        return [["LeaderName", "BuildingName"], "Update Gym Leader"];

      case "getPokemonWithMoveAndType":
        return [["TypeName", "MoveName"], "Get Pokemon"];

      case "selectPokemartsByItem":
        return [["Item Name"], "Get Pokemarts"];

      case "getPokemonWithName":
        return [["Pokemon Name"], "Get Pokemon"];

      case "getPokemonWithMove":
        return [["Move Name"], "Get Pokemon"];

      case "getEvolvedFormWithPokemonName":
        return [["Pokemon Name"], "Get Pokemon's Evolved Form"];

      default:
        return [[], "Select"];
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
    // put into a different method
    console.log(selection.value);
    this.convertToEndpoint(selection.value);

    console.log("ran convert to endpoint");
    /*
    const url = `http://localhost:3006/all/${selection.value}`;
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(result => this.setState(result));
    */
  };

  convertToEndpoint(selection) {
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
          onButtonClick={this.setState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
