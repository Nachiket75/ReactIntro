import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'; //BrowserRouter is used to do routing to make single page application look like multiple page application

class App extends Component {  
  render() {      
    return ( 
      <BrowserRouter>      
        <div>
          <Blog />   
        </div>      
      </BrowserRouter>
    )
  }
}

export default App;

//we are using https://jsonplaceholder.typicode.com/ for GET POSTS and all RESTFUL requests.

//we are using axios package to make RESTFUL http request easily. use npm install axios --save on terminal
// to save this package in npm so that we can use it.
