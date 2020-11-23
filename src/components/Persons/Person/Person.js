import React from 'react'
import classes from './Person.css' 
// import .css file is called external css style 
//import classes from './Person.css' is called use of css moduling

const person = (props)=>{  
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old </p>
            {/* props.click will execute switchandler function of app.js from here when paragraph is clicked*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}></input>
        </div>
    
    )
    //{Math.floor(Math.random()*30)} years old
};

export default person;        //we have to wrap person file in Radium to use Radium functionality