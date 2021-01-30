import *as actionTypes from './actionTypes'
import axiosOrder from '../../axios-orders'
import axios from 'axios'
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
        axiosOrder.get("https://react-burger-331dd-default-rtdb.firebaseio.com/Ingredients.json")
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

export const authFail = (error) =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout())
        }, expirationTime*1000)        
    }
}

export const auth = (email,password,isSignUp) =>{
    return dispatch =>{
        dispatch(authStart())
        const authdata = {
            email:email,
            password:password,                          // as shown in signup user firebase url we have created auth payload
            returnSecureToken:true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc7Z22g6YY9q1i_yBEv5wQE-5vI33wteE" //signup url
        //serach firebase rest auth on google open link and on right hand side you will see link of firebase For sign up user
        //axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]") this is the link for sign up the user
        //copy API_KEY FROM firebase project general settings
        if(!isSignUp)
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc7Z22g6YY9q1i_yBEv5wQE-5vI33wteE" //signin url
        axios.post(url,authdata)
        .then(response=>{
            console.log(response)
            const expirationDate = new Date (new Date().getTime() + response.data.expiresIn*1000)
            localStorage.setItem('token',response.data.idToken)    //storing data in browsers local storage
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userId', response.data.localId)
            dispatch(authSuccess(response.data)) //on sucesss we dispatching authSuccess()
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(error=>{
            console.log(error)
            dispatch(authFail(error.response.data.error))     //on fail we dispatching authFail()
        })
    }
}

export const checkAuthState =()=>{
    return dispatch =>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else{
            const expirationDate = new Date (localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch(logout())
            }else {
                const userId = localStorage.getItem('userId')
                const data = {
                    idToken:token,
                    localId:userId    }
                dispatch(authSuccess(data))
                dispatch(checkAuthTimeout((expirationDate.getTime()- new Date().getTime())/1000)) //we are dividing by 1000 as we are multiplying in checkAuthTimeout() function which is not needed in this case hence to nulify this effect we are dividing with 1000
            }
        }

    }
}