import React, { Component } from 'react';
import Persons from './container/Persons'
class App extends Component {  
  render() {      
    return ( 
      <div>
        <Persons/>                  
      </div>      
    )
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
