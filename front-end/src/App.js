import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
      <ReactTable
        columns={columns}
        data={this.state.posts}
        noDataText={"No more data to display."}
      />
    );
  }
}

export default App;
