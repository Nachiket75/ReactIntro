const initialState = {
    counter : 0,
    results : []
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                counter:state.counter + 1
            }
        case "DECREMENT":
            return{
                ...state,
                counter:state.counter - 1
            }
        case "ADD":
            return{
                ...state,
                counter:state.counter + action.value
            }

        case "SUB":
            return{
                ...state,
                counter:state.counter - action.value
            }
        case "STORE_RESULTS":
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})
            }
        
        case "DELETE_RESULT":
            const updatedArray = state.results.filter(result=>result.id!== action.resultId)
            return{
                ...state,
                results:updatedArray
            }

       default:
            return{
                ...state,
                counter:0
            }
    }    
   // return state
}

export default reducer;