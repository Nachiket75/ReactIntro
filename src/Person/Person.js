import React from 'react'
import './Person.css'
// import .css file is called external css style 
const person = (props)=>{
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old </p>
            {/* props.click will execute switchandler function of app.js from here when paragraph is clicked*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange}></input>
        </div>
    
    )
    //{Math.floor(Math.random()*30)} years old
};

export default person;        //This file is imported in app.js 