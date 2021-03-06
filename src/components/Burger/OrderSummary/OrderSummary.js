import React from 'react'
import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props)=>{
    const ingredients = props.ingredients
    let ingredientSummary ;
   
    const keys   = Object.keys(ingredients);
    const values = Object.values(ingredients);
    // console.log(keys);
    // console.log(values);
    // console.log("length:"+keys.length);
    
 
    ingredientSummary = keys.map((key,index)=>{
            return(                
                <li key={index}>
                    <span>{key}</span>:{values[index]}                    
                </li>
            )
            
    });

  
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;