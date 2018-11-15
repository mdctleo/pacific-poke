import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

class QueryInput extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.state);
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
