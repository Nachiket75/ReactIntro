import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component { //const persons = (props) =>                    
  render(){
    console.log("[Persons.js] is rendering...");
    return this.props.persons.map((person,index)=> {
      return( 
        <Person 
          name= {person.name} 
          age={person.age}
          key={person.id}
          // click = {this.deleteNameHandler.bind(this,index)} you can do using bind or arrow func as given below
          click = {()=>this.props.click(index)} //click = {()=>this.deleteNameHandler(index)}
          nameChange ={(event)=>this.props.nameChange(event,person.id)}        
        /> 
      );
      });
    }
  }

export default Persons;