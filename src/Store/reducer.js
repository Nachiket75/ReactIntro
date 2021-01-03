import * as actionTypes from './actionTypes'

const initialState = {
    ingredients:{        
        bacon:0,
        cheese:0,
        meat:0,
        salad:0
    },      
    totalPrice:0
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case actionTypes.ADD_INGREDIENT :
            console.log(actions.ingredientName)
            return {               
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]: state.ingredients[actions.ingredientName] + 1                    
                }                               
            }       

        case actionTypes.REMOVE_INGREDIENT:
            console.log(actions.ingredientName)
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [actions.ingredientName]: state.ingredients[actions.ingredientName] - 1
                }
            }        

        default:
            return state;
    }
    
}

export default reducer;