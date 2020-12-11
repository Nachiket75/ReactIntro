import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BergerBuilder'
class App extends Component {  
  state = {
    show:true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:false})
    },5000)
  }
  render() {      
    return ( 
      <div>
        <Layout>
          {this.state.show? <BurgerBuilder/>:null}
        </Layout>               
      </div>      
    )
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
