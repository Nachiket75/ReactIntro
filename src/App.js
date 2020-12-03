import React, { Component } from 'react';
import Blog from './containers/Blog/Blog'

class App extends Component {  
  render() {      
    return ( 
      <div>
        <Blog />   
      </div>      
    )
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
