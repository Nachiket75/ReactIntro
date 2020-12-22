import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component{
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }
    orderHandler = () =>{
     this.setState({loading:true})   
     const ingrdients = this.props.location.state.ingredients;
     const totalPrice = this.props.location.state.totalPrice;
     console.log(ingrdients)
     console.log(totalPrice)
     const order ={
            ingredients: ingrdients,
            price:totalPrice,
            customer:{
                name:document.getElementById("name").value,
                address:{
                    street:document.getElementById("street").value,
                    zipCode:document.getElementById("postalcode").value,
                    country:document.getElementById("country").value
                },
                email:document.getElementById("email").value
            }
           
        }
        axios.post('/order.json',order)
            .then(response =>{
                console.log(response)
                this.setState({loading:false, ordered:false})   //To close to modal after post data to server we set ordered to false
            })
            .catch(error =>{
                console.log(error)
                this.setState({loading:false, ordered:false})
            })
        console.log(order)
        if(this.state.loading == false)
            this.props.history.push("/")
    }

    render(){
        // if(this.state.loading){
        //     <Spinner/>
        // }
        return(
            <div className={classes.ContactData}>
                <h1>Enter your contact details</h1>
                <form>
                    <input className={classes.input} type="text" id="name" placeholder="Your Name"/>
                    <input className={classes.input} type="email" id="email" placeholder="Your Email" />                    
                    <input className={classes.input} type="text" id="street" placeholder="Your Street" />                    
                    <input className={classes.input} type="text" id="country" placeholder="Your Country" />                    
                    <input className={classes.input} type="text" id="postalcode" placeholder="Your PostalCode" />      
                    <br/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>              
                </form>
            </div>
        )
    }
}

export default ContactData;