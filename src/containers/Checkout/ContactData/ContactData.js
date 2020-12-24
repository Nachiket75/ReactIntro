import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component{
    state = {  
        loading:false
    }

    redirectToMainPage = () =>{        
        if(this.state.loading === false){
            setTimeout(() => {
                this.props.history.replace("/")
              }, 1000);           
        }               
    }

    orderHandler = (event) =>{
     event.preventDefault();
     
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
        axios.post('/orders.json',order)
            .then(response =>{
                console.log(response)
                this.setState({loading:false})   //To close to modal after post data to server we set ordered to false
            })
            .catch(error =>{
                console.log(error)
                this.setState({loading:false})
            })
        console.log(order)
        // if(this.state.loading == false)
        //     this.props.history.replace("/")
        alert("You Ordered Successfully ")
        this.redirectToMainPage()
      
    }

    render(){         
        return(
            this.state.loading ? <Spinner/>: 
            <div className={classes.ContactData}>
                <h1>Enter your contact details</h1>
                <form onSubmit={this.orderHandler}>
                    <Input inputtype="input" label="Name" type="text" id="name" placeholder="Your Name" minLen={5}/>
                    <Input inputtype="input" label="Email" type="email" id="email" placeholder="Your Email" minLen={10}/>                    
                    <Input inputtype="input" label="Street" type="text" id="street" placeholder="Your Street" minLen={7}/>                    
                    <Input inputtype="input" label="Country" type="text" id="country" placeholder="Your Country" minLen={4}/>                    
                    <Input inputtype="input" label="PostalCode" type="text" id="postalcode" placeholder="Your PostalCode" minLen={5}/>      
                    <br/>
                    <Button btnType="Success" type="submit">ORDER</Button>                       
                </form>                
            </div>

            
            
        )
    }
}

export default ContactData;