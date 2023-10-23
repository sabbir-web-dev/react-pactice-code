import React, { Component, createRef } from "react";

class RefHook extends Component {
  constructor(props) {
    super(props);
    this.useNameRef = createRef();
    this.state = {
      name: "", // Initialize name in state
    };
  }
  
  submitHendle = (e) => {
    e.preventDefault();
    const name = this.useNameRef.current.value
    this.useNameRef.current.style.color = "red";
    this.setState({name})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHendle}>
          <input type="text" name="name" ref={this.useNameRef} />
          <button type="submit">Submit</button>
          <h3>{this.state.name}</h3>
        </form>
      </div>
    );
  }
}

export default RefHook;
