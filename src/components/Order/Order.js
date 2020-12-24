import React from 'react'
import classes from './Order.css'
const order = (props) => {
    const ingredients = []
    const customerDetails = []
    // console.log("cheese:"+props.ingredients["cheese"])
    // console.log("email:"+props.customer["email"])
    for(let ingredient in props.ingredients){
        ingredients.push(
            {
                name:ingredient,
                quantity: props.ingredients[ingredient]
            }
        )
    }
    customerDetails.push({
        cookingInstruction :props.customer.cookingInstruction,
        email:props.customer.email,
        name:props.customer.name,
        country:props.customer.address.country,
        street:props.customer.address.street,
        zipcode:props.customer.address.zipCode
    })

    const customerOutput = customerDetails.map(cust=>{
        return(
            
            <div style={{
                fontWeight:'bold',
                //display:'inline-block',
                //textAlign:'center',
                //border:'1px solid lightgreen',
                margin:'10px 10px',
                padding:'20px 20px',
                color:'green',
                border:'1px solid green',
                backgroundColor:'white'
                
            }} key={cust.name}>
                {/* key={ig.email}> */}
                Name:{cust.name} <br/><br/>
                Email:{cust.email} <br/><br/>
                Cooking-Instruction:{cust.cookingInstruction} <br/><br/>
                Street:{cust.street} <br/><br/>
                Zipcode:{cust.zipcode} <br/><br/>
                Country:{cust.country} <br/><br/>
            </div>
        )
    })
    const ingredientOutput = ingredients.map(ig=>{
        return <span 
                style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px ',
                    border:'1px solid lightgreen',
                    padding:'5px',
                    color:'green',
                    backgroundColor:'white',
                    fontWeight:'bold'
                }}
            key={ig.name}>{ig.name}:({ig.quantity})</span>
    })
    return(
        <div className={classes.Order}>           
            {/* <p>Personal Details: {props.customer}</p> */}
            <p><strong>Personal Details:</strong></p>
            {customerOutput}
            <p><strong>ingredients:</strong>{ingredientOutput}</p>
            <p><strong>price: USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;