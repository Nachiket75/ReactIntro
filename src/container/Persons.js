import React,{Component} from 'react';
import AddPerson from '../Component/AddPerson/AddPerson'
import Person from '../Component/Person/Person'
class Persons extends Component{           
    
    state = {      
         Persons : []   
    }
    addPersonHandler = (props)=>{
        // console.log(props.name)
        // console.log(props.age)
       const Newperson = {
           id:Math.random(),
           name:props.name, 
           age:props.age
        }
        this.setState((prevState) => {
            return{
                Persons:prevState.Persons.concat(Newperson)
            }
        })
        console.log(this.state.Persons)
    }
    deletePersonHandler = (personId) =>{
        this.setState((prevState)=>{
            return({Persons:prevState.Persons.filter(person=> person.id!== personId)})
        })
    }
      
    render(){  
        return(            
            <div style={{textAlign:'center'}}>
                <AddPerson personAdded={(props)=>this.addPersonHandler(props)} ></AddPerson>
                {this.state.Persons.map(person =>(
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked = {()=>this.deletePersonHandler(person.id)}
                    />                    
                ))
                }                  
            </div>
        )
    }
}

export default Persons