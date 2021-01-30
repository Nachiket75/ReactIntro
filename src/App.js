import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BergerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch,Redirect} from 'react-router-dom'
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
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/"/>
      </Switch>

    ) 

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/checkout"  component={Checkout}/>     
          <Route path="/orders" component={Orders}/>         
          <Route path="/logout" component ={Logout}/>
          <Route path="/" exact component={BurgerBuilder} />           
          <Redirect to="/"/>
        </Switch>
      )
    }
    return ( 
      <div>
        <Layout>
          {routes}
        </Layout>               
      </div>      
    )
  }
}

const mapStateToProps = state=>{
  return{
    isAuthenticated: state.auth.token!= null
  }
}

const mapDispatchToProps =dispatch=>{
  return{
    onTryAutoSignUp : ()=>dispatch(actionCreators.checkAuthState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
