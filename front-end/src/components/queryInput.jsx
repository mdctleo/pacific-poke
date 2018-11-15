import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

class QueryInput extends Component {
  constructor(props) {
    super(props);
    // TODO: reset userFormInput array if selected to something else.
    //       e.g. selectPokemonWithName to pokemon
    //       current problem is it still remembers the inputs of selectPokemonWithName
    this.state = {
      userFormInput: new Array(this.props.formLabels.length)
    };
  }

  handleChange = (event, i) => {
    let userFormInput = this.state.userFormInput;
    userFormInput[i] = event.target.value;
    this.setState({ userFormInput });
  };

  handleClick = () => {
    let endpoint = `http://localhost:3006/${this.props.selected}`;
    if (this.state.userFormInput.length > 0) {
      endpoint += `/${this.state.userFormInput.join('/')}`;
    }
    console.log(endpoint, this.state);
    // TODO: Handle POST, PUT, DELETE queries (e.g. create item, update item, delete building)
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.props.onButtonClick(res));
  };

  render() {
    return (
      <div>
        {this.props.formLabels.map((formLabel, index) => {
          return (
            <FormControl
              type="text"
              key={index}
              placeholder={this.props.formLabels[index]}
              onChange={event => this.handleChange(event, index)}
            />
          );
        })}
        <Button bsStyle="primary" onClick={this.handleClick}>
          {this.props.buttonLabel}
        </Button>
      </div>
    );
  }
}

export default QueryInput;
