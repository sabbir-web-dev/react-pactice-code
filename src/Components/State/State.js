import React, { Component } from 'react';
import "./State.css";
import Button from 'react-bootstrap/Button';

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    countUp = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    countDown = () =>{
        this.setState ({
            count : this.state.count -1 
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h2 className='fs-1 fw-bold dark' >Count:{count}</h2>
                <Button className='m-1' onClick={this.countUp} variant="primary" disabled={ count===5 ? true : false} >+</Button>
                <Button onClick={this.countDown} variant="primary" disabled={ count===0 ? true: false} >-</Button>
            </div>
        );
    }
}

export default State;