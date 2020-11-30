import React from 'react'
import Aux from '../../../hoc/Auxilary'

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
            <p>Continue to checkout?</p>
        </Aux>
    );
}

export default orderSummary;