import React from 'react'
import classes from './Order.css'
const order = (props) => {
    const ingredients = []
    for(let ingredient in props.ingredients){
        ingredients.push(
            {
                name:ingredient,
                quantity: props.ingredients[ingredient]
            }
        )
    }

    const ingredientOutput = ingredients.map(ig=>{
        return <span 
                style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px ',
                    border:'1px solid lightgreen',
                    padding:'5px',
                    color:'green',
                    backgroundColor:'white'
                }}
            key={ig.name}>{ig.name}:({ig.quantity})</span>
    })
    return(
        <div className={classes.Order}>           
            <p>ingredients:{ingredientOutput}</p>
            <p>price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;