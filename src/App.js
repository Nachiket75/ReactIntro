import React, { Component } from 'react';
import Counter from './containers/Counter'
class App extends Component {  
  render() {      
    return ( 
      <div>
        <Counter/>                  
      </div>      
    )
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
