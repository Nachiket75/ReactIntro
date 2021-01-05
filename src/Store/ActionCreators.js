export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUB = "SUB";
export const STORE_RESULTS = "STORE_RESULTS";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () =>{
    return{
        type:INCREMENT
    }
}

export const decrement = () =>{
    return{
        type:DECREMENT
    }
}

export const add = (value) => {
    return{
        type:ADD,
        value:value
    }
}

export const subtract = (value) => {
    return{
        type:SUB,
        value:value
    }
}

export const saveResult = (res) =>{
    return{
        type:STORE_RESULTS,
        counterRef:res
    }
}

export const storeResult = (res) =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(saveResult(res))
        },2000)
    }
}

export const deleteResult = (id) =>{
    return{
        type:DELETE_RESULT,
        resultId : id
    }
}