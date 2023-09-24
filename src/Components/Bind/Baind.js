import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "./Banind.css"

class Baind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    //   or 
    //   this.bainHendel = this.bainHendel.bind(this)
    }
    bainHendel (){
        this.setState({
            count : this.state.count + 1
        })
    }

    
    render() {
        return (
            <div className='bind'>
                <h2 className=''>{this.state.count}</h2>
                <Button onClick={this.bainHendel.bind(this)} variant="primary">Baind</Button>
            </div>
        );
    }
}

export default Baind;