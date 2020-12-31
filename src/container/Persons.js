import React,{Component} from 'react';
import AddPerson from '../Component/AddPerson/AddPerson'
import Person from '../Component/Person/Person'
import {connect} from 'react-redux'
import * as actionTypes from '../Store/ActionTypes'

class Persons extends Component{           
    
    // state = {      
    //      Persons : []   
    // }

    // addPersonHandler = (props)=>{
    //     // console.log(props.name)
    //     // console.log(props.age)
    //    const Newperson = {
    //        id:Math.random(),
    //        name:props.name, 
    //        age:props.age
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             Persons:prevState.Persons.concat(Newperson)
    //         }
    //     })
    //     console.log(this.state.Persons)
    // }
    // deletePersonHandler = (personId) =>{
    //     this.setState((prevState)=>{
    //         return({Persons:prevState.Persons.filter(person=> person.id!== personId)})
    //     })
    // }
      
    render(){  
        return(            
            <div style={{textAlign:'center'}}>
                {/* <AddPerson personAdded={(props)=>this.addPersonHandler(props)} ></AddPerson> */}
                <AddPerson personAdded={(props)=>this.props.onAddPerson(props)} /> 
                {this.props.pers.map(person =>(
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        // clicked = {()=>this.deletePersonHandler(person.id)}
                        clicked = {()=>this.props.onRemovePerson(person.id)}
                    />                    
                ))
                }                  
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        pers : state.persons
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddPerson:(props)=>dispatch({type:actionTypes.ADD_PERSON, person:props}),
        onRemovePerson:(id)=>dispatch({type:actionTypes.REMOVE_PERSON,personId:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons)