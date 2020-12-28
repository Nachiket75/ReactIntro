import * as actionTypes from '../ActionTypes'

const initialState = {
    results : []
}

const reducer = (state=initialState,action) =>{
    switch(action.type){        
        case actionTypes.STORE_RESULTS:
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:action.counterRef})
            }
        
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result=>result.id!== action.resultId)
            return{
                ...state,
                results:updatedArray
            }

       default:
            break;
    }    
    return state
}

export default reducer;