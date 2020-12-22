import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'
class Checkout extends Component{
    state={
        ingredients :{

        },
        totalPrice:0
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({ingredients:this.props.location.state.ingredients })
        this.setState({totalPrice:this.props.location.state.totalPrice })
        
    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack()               //goBack method will go to previous page on the stack
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace({pathname:'/checkout/contact-data',
                                    state:{ingredients:this.state.ingredients,totalPrice:this.state.totalPrice}
    })     //replace method will top of the stack with checkout url and you will go to checkout page
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                checkoutContinue = {this.checkoutContinueHandler}
                checkoutCancelled ={this.checkoutCancelledHandler} />
                <Route 
                    path={this.props.match.url+ "/contact-data" }                    
                    component={ContactData}   />
            </div>
        )
    }
}

export default Checkout;