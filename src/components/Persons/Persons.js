import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person,index)=> {                    
    return <Person 
        name= {person.name} 
        age={person.age}
        key={person.id}
        // click = {this.deleteNameHandler.bind(this,index)} you can do using bind or arrow func as given below
        click = {()=>props.click(index)} //click = {()=>this.deleteNameHandler(index)}
        nameChange ={(event)=>props.nameChange(event,person.id)}        
      /> 
      });

export default persons ;