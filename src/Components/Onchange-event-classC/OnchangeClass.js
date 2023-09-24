import React, { Component } from "react";
import Form from 'react-bootstrap/Form';


class OnchangeClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value : ''
      }
    }
    

    onChangeHendel = (e) =>{
        this.setState({
            value : e.target.value
        })
    }

  render() {
    return (
      <div>
        <Form.Control onChange={this.onChangeHendel} type="text" placeholder="Enter Text" />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default OnchangeClass;
