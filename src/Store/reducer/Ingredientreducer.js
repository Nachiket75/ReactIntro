import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients:{},     
    totalPrice:0,
    error:false,
    serverPrice:0,    
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
        
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients://actions.ingredients,
                {
                    salad: actions.ingredients.salad,
                    bacon: actions.ingredients.bacon,
                    cheese: actions.ingredients.cheese,
                    meat: actions.ingredients.meat
                },
                
                error:false
            }
        case actionTypes.SET_INGREDIENTS_PRICE:
            return{
              ...state,
              totalPrice:actions.totalPrice,
              serverPrice:actions.totalPrice,
              error:false                
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            }

        default:
            return state;
    }
    
}

export default reducer;