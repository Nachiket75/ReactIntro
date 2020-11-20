import React from 'react'
import styled from 'styled-components'
// import './Person.css'
// import .css file is called external css style 
const styledDiv = styled.div`
    width: 60%;
    margin: 20px auto;
    border: 2px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width:500px)':{
        width:'450px'
    }
`;
const person = (props)=>{
    const style = {
        '@media (min-width:500px)':{
            width:'400px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old </p>
            {/* props.click will execute switchandler function of app.js from here when paragraph is clicked*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}></input>
        </div>
    
    )
    //{Math.floor(Math.random()*30)} years old
};

export default person;        //we have to wrap person file in Radium to use Radium functionality