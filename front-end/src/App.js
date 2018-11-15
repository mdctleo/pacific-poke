import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableColumns: [],
      tableData: []
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

  render() {
    const options = [
      "pokemon",
      "items",
      "buildings",
      "locations",
      "types",
      "moves"
    ];

    return (
      <div>
        <Dropdown
          className="interested"
          options={options}
          onChange={this._onSelect}
          //value={defaultOption}
          placeholder="Select an option"
        />
        <ReactTable
          columns={this.state.tableColumns}
          data={this.state.tableData}
          defaultPageSize={10}
          noDataText={"No more data to display."}
        />
      </div>
    );
  }
}

export default App;
