import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'
class Checkout extends Component{
    state={
        ingredients :{

        }
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({ingredients:this.props.location.state.ingredients })
        
    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack()               //goBack method will go to previous page on the stack
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data')     //replace method will top of the stack with checkout url and you will go to checkout page
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                checkoutContinue = {this.checkoutContinueHandler}
                checkoutCancelled ={this.checkoutCancelledHandler} />
            </div>
        )
    }
}

export default Checkout;