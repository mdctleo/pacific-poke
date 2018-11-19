import React, { Component } from "react";
import { Button, FormControl, Form, FormGroup } from "react-bootstrap";

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

  componentDidUpdate(prevProps) {
    if (this.props.formLabels !== prevProps.formLabels) {
      console.log('resetting form input state...')
      this.setState({ userFormInput: new Array(this.props.formLabels.length) });
    }
  }

  render() {
    return (

      <div>
        <Form inline>
            {this.props.formLabels.map((formLabel, index) => {
              return (
                <FormGroup controlId="formInlineName" className="input-box">
                  <FormControl
                  type="text"
                  key={this.props.selected + formLabel}
                  placeholder={formLabel}
                  onChange={event => this.handleChange(event, index)}
                  />
                </FormGroup>
              );
            })}


            {this.props.buttonLabel !== '' &&
            <Button bsStyle="primary" onClick={this.handleClick}>
              {this.props.buttonLabel}
            </Button>}
        </Form>
      </div>
    );
  }
}

export default QueryInput;
