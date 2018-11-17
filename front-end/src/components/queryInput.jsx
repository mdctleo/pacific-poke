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
    let fetchOptions = this.props.onButtonClickOptions;
    if (this.state.userFormInput.length > 0) {
      if (Object.keys(fetchOptions).length === 0) {
        // GET
        endpoint += `/${this.state.userFormInput.join('/')}`;
      } else {
        // POST, PUT, DELETE
        let body = {}
        for (let i = 0; i < this.props.formLabels.length; i++) {
          body[this.props.formLabels[i]] = this.state.userFormInput[i];
        }
        fetchOptions['body'] = JSON.stringify(body)
      }
    }
    console.log(endpoint, this.state, fetchOptions);
    fetch(endpoint, fetchOptions)
      .then(res => res.json())
      .then(res => this.props.onButtonClick(res))
      .catch(err => console.error(err));
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
        {this.props.buttonLabel !== '' &&
        <Button bsStyle="primary" onClick={this.handleClick}>
          {this.props.buttonLabel}
        </Button>}
      </div>
    );
  }
}

export default QueryInput;
