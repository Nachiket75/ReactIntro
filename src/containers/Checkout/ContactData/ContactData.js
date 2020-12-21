import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
class ContactData extends Component{
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }
    render(){
        return(
            <div className={classes.ContactData}>
                <h1>Enter your contact details</h1>
                <form>
                    <input className={classes.input} type="text" name="name" placeholder="Your Name"/>
                    <input className={classes.input} type="email" name="email" placeholder="Your Email" />                    
                    <input className={classes.input} type="text" name="street" placeholder="Your Street" />                    
                    <input className={classes.input} type="text" name="postalcode" placeholder="Your PostalCode" />      
                    <br/>
                    <Button btnType="Success">ORDER</Button>              
                </form>
            </div>
        )
    }
}

export default ContactData;