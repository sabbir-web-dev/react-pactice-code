import React, { Component } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

class Condison extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login : true
      }
    }
    
    render() {
        if(this.state.login){
            return <HomePage />
        }
        else{
           return <LoginPage />
        }
    }
}

export default Condison;