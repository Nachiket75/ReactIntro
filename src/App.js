import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BergerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch} from 'react-router-dom'
class App extends Component {  
  render() {      
    return ( 
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout"  component={Checkout}/>           
            <Route path="/" exact component={BurgerBuilder} />           
          </Switch>
        </Layout>               
      </div>      
    )
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
