import * as actionTypes from '../ActionTypes'

const initialState ={
    persons : [] 
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_PERSON:      
            console.log(action.person) 
            const Newperson = {
                id:Math.random(),
                name:action.person.name, 
                age:action.person.age
            }         
            return{
                ...state,
                persons:state.persons.concat(Newperson)
            }

        case actionTypes.REMOVE_PERSON:
            return{
                ...state,
                persons:state.persons.filter(person=> person.id!== action.personId)
            }       
    }
    return state;
}

export default reducer;
