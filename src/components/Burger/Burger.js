import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props)=>{
    const keys = Object.keys(props.ingredients);
    const values = Object.values(props.ingredients);
    let ingredientList = []
    let noIngredientMsg = null;
   // console.log(keys)
   // console.log(values)
    for(var i=0;i<values.length;i++){      //i=valIndex 
        for(var j=0; j<values[i];j++ ){        //j=valCounter       
            ingredientList.push(keys[i])
        }                              
    }
    //console.log(ingredientList)
   
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type={ingredientList[0]} />          
            <BurgerIngredient type={ingredientList[1]} />          
            <BurgerIngredient type={ingredientList[2]} />          
            <BurgerIngredient type={ingredientList[3]} />          
            <BurgerIngredient type={ingredientList[4]} />          
            <BurgerIngredient type={ingredientList[5]} />           */}
            {ingredientList.map((ingredient,index) =>(
                    <BurgerIngredient type={ingredient} key={index}/>
                )  
             )        
            } 
            
           
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );

}

export default burger;