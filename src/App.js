import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BergerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Logout/Logout'
import {connect} from 'react-redux'
import * as actionCreators from './Store/actions/actionCreator'

class App extends Component {  
  componentDidMount(){
    this.props.onTryAutoSignUp()
  }
  render() {      
    return ( 
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout"  component={Checkout}/>     
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/logout" component ={Logout}/>
            <Route path="/" exact component={BurgerBuilder} />           
          </Switch>
        </Layout>               
      </div>      
    )
  }
}

const mapDispatchToProps =dispatch=>{
  return{
    onTryAutoSignUp : ()=>dispatch(actionCreators.checkAuthState())
  }
}

export default connect(null,mapDispatchToProps) (App);

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
