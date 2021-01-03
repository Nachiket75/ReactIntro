import * as actionTypes from './actionTypes'

const initialState = {
    ingredients:{        
        bacon:0,
        cheese:0,
        meat:0,
        salad:0
    },      
    totalPrice:4
}
const INGREDIENT_PRICES = {
    bacon:0.7,
    cheese:0.4,
    meat:1.3,    
    salad:0.5
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case actionTypes.ADD_INGREDIENT :
           // console.log(actions.ingredientName)
            return {               
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]: state.ingredients[actions.ingredientName] + 1                    
                },          
                totalPrice: state.totalPrice + INGREDIENT_PRICES[actions.ingredientName]
            }       

        case actionTypes.REMOVE_INGREDIENT:
           // console.log(actions.ingredientName)
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]: state.ingredients[actions.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[actions.ingredientName]
            }        

        default:
            return state;
    }
    
}

export default reducer;