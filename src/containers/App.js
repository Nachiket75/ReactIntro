import React, { Component } from 'react';
import allclasses from './App.css';
import Person from '../components/Persons/Person/Person'; //Person.js file contains in this path components/Persons/Person/Person


class App extends Component {
  state = {
    persons: [
      {id:1, name:'Nachi', age:25},
      {id:2, name:'Adi', age:28},
      {id:3, name:'Reva', age:54},
      {id:4, name:'Shashi', age:61}
    ],
    showPersons:false   
  }

  switchNameHandler = (newName) => {
    this.setState(
     {
      persons: [
        {name:newName, age:25},
        {name:'Aditya Natekar', age:28},
        {name:'Revati Natekar', age:54},
        {name:'Shashikant Natekar', age:61}
      ]
     }
    )
  }

  nameChangeHandler = (event,id) =>{
    console.log(id)
    const personIndex = this.state.persons.findIndex(per =>{
      return per.id === id;
    })
    console.log(personIndex)
    //taking record of specific person
    const person = {
      ...this.state.persons[personIndex]                  
    }
    //above statment since state contains objects of each person enclosed in {} we have to enclosed specific person in object using above syntax
    person.name = event.target.value;

    //creating copy of person array
    const allPersons = [...this.state.persons]; 
    //we have updated specific person name using persons index
    allPersons[personIndex] = person

    this.setState({persons:allPersons});
    
  }

  togglePersonHandler = () =>{
    const toggleStatus = this.state.showPersons;
    this.setState({showPersons:!toggleStatus});

  }

  deleteNameHandler = (personIndex) =>{
    // const persons = this.state.persons.slice() This will create copy of array in person variable but below
    //  method is efficient
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  }
  render() {    
    let personsState = null;
    let btnClass = [allclasses.button]
    if(this.state.showPersons){   
      btnClass.push(allclasses.Red);  
     personsState =(
      <div>
         {
           // looping in react is done using sytax as shown below
           this.state.persons.map((person,index)=>{                    
            return <Person 
                name= {person.name} 
                age={person.age}
                key={person.id}
                // click = {this.deleteNameHandler.bind(this,index)} you can do using bind or arrow func as given below
                click = {()=>this.deleteNameHandler(index)}
                nameChange ={(event)=>this.nameChangeHandler(event,person.id)}
                
              />
              })
              
         }            
      </div>   
    );   
   
  }
    
  //dyanmically assigning css classed
  const classes = [];
  
  if(this.state.persons.length<=4){
    classes.push(allclasses.bold)
    classes.push(allclasses.green)
  }
  if(this.state.persons.length<=2){
    classes.pop(allclasses.green)
    classes.push(allclasses.red)
    // pop will remove the class and push will add the css class
  }
   
    
    return (           
      <div className={allclasses.App}>
        <h1>Hi This is React App</h1>
        <p className={classes.join(' ')}>This is really working</p>      
        {/* classes.join is used to to join more than one class  */}
        <button           
          className={btnClass.join(' ')}
          onClick ={this.togglePersonHandler} >Show/Hide Person
        </button>    
        {personsState}       
 
      </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does This work now'));  lecture 30:understanding jsx
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
