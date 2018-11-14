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
      posts: []
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    })
      .then(reponse => reponse.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
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

    const columns = [
      {
        Header: "User ID",
        accessor: "userId"
      },
      {
        Header: "ID",
        accessor: "userId"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Content",
        accessor: "body"
      }
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
          columns={columns}
          data={this.state.posts}
          defaultPageSize={10}
          noDataText={"No more data to display."}
        />
      </div>
    );
  }
}

export default App;
