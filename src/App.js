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

//we are using https://jsonplaceholder.typicode.com/ for GET POSTS and all RESTFUL requests.

//we are using axios package to make RESTFUL http request easily. use npm install axios --save on terminal
// to save this package in npm so that we can use it.
