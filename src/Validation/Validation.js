import React from 'react'

const validation = (props) =>{
    let validationMessage = 'Text is to short';
    if(props.inputLen > 5){
        validationMessage = 'Text is long enough'
    }

        
    return(         
        <div>
            {/* Method 1:
             <p>Text length :{props.inputLen}</p>
            {
             props.inputLen > 5?
             <p>Text is long enough</p>
             :<p>Text is to short</p>

            } */}

            <p>{validationMessage}</p>
        </div>
    )

}

export default validation;