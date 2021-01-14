import *as actionTypes from './actionTypes'
import axios from '../../axios-orders'

// const INGREDIENT_PRICES = {
//     bacon:0.7,
//     cheese:0.4,
//     meat:1.3,    
//     salad:0.5
// }

export const addIngredient = (name) =>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient = (name) =>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setIngredients = (ingredients) =>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients

    }
}
export const setIngredientPrice = (servPrice) =>{
    // let serverAssignedPrice = servPrice;  
    // const keys   = Object.keys(serverIngredients);//Object.keys(response.data);
    // const values = Object.values(serverIngredients);  //Object.values(response.data);  
                    
    // console.log(values)

    // for(var i=0;i<values.length;i++){    
    //     if(values[i]>0){            
    //         for(var j=0; j<values[i];j++ ){
    //            console.log(keys[i])
    //            console.log(values[i])
    //            servPrice = servPrice+INGREDIENT_PRICES[keys[i]]
    //        }
    //     }
    // }
    return{
        type:actionTypes.SET_INGREDIENTS_PRICE,
        totalPrice:servPrice//.toFixed(2)

    }
}

export const fetchIngredientsFailed = () =>{
    return{
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () =>{
    return dispatch=>{     
       
        var serverIngredients = {}
        axios.get("https://react-burger-331dd-default-rtdb.firebaseio.com/Ingredients.json")
            .then(response=>{
                console.log(response.data)    
                serverIngredients =response.data
                // {                      
                //     salad: response.data.salad,
                //     bacon: response.data.bacon,
                //     cheese: response.data.cheese,
                //     meat:response.data.meat     
                // }
                dispatch(setIngredients(response.data))           
         }).catch(error=>{
             console.log("error")
             dispatch(fetchIngredientsFailed())
         })                

         axios.get("https://react-burger-331dd-default-rtdb.firebaseio.com/BaseBurgerPrice.json")
         .then(response =>{
             console.log(response.data)       
             dispatch(setIngredientPrice(response.data,serverIngredients))             
         }).catch(error=>{
             dispatch(fetchIngredientsFailed())
         })
    }
}

export const authStart = () =>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        authData:authData
    }
}

export const authError = (error) =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const auth = (email,password) =>{
    return dispatch =>{
        dispatch(authStart())
    }
}