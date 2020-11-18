import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Nachi', age:25},
      {name:'Adi', age:28},
      {name:'Reva', age:54},
      {name:'Shashi', age:61}
    ],
    showPersons1:false      ,
    showPersons2:false

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

  nameChangeHandler = (event) =>{
   this.setState(
     {
       persons:[
         {name:event.target.value, age:25},
         {name:'Aditya Natekar', age:28},
         {name:'Revati Natekar', age:54},
         {name:'Shashikant Natekar', age:61}
       ]
     }
   )
  }

  togglePersonHandler1 = () =>{
    const toggleStatus = this.state.showPersons1;
    this.setState({showPersons1:!toggleStatus});

  }
  togglePersonHandler2 =() =>{
    const toggleStatus = this.state.showPersons2
    this.setState({showPersons2:!toggleStatus});
  }

  render() {
    const style ={
        backgroundColor:"white",        
        border: '5px solid cyan',
        font:'inherit',
        padding:'8px',
        margin:'auto 10px',
        cursor:'pointer'


    }
    // Method 2 to toggle Persons pure javascript way
    let personsState = null;
    if(this.state.showPersons2){     
     personsState =(
      <div>
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this,"Nachiket Natekar")}
          nameChange ={this.nameChangeHandler}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} >My hobbies:Singing</Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}> My hobbies:Sprituality</Person>
      </div>   
    );
  }
    
    
    
    // method 1 to toggle persons using unorthodox way
    return (
 
      <div className="App">
        <h1>Hi This is React App</h1>
        <p>This is really working</p>       
        <button 
          style = {style}
          // this is called inline css style 
          onClick ={this.togglePersonHandler1} >Show/Hide Person
        </button>    

        <button 
          style = {style}
          // this is called inline css style 
          onClick ={this.togglePersonHandler2} >Toggle Person using 2nd way          
        </button>     
        {personsState}           
        {/* call to personsState function to toggle the persons */}

 {/* below statement is conditional statement will execute div part if showPersons value is true it will show all persons
 otherwise execute end of div part start from : which will have nothing it will hide all the persons  */}
      {           
        this.state.showPersons1? 
          <div>
            {
              // looping in react is done using sytax as shown below
              this.state.persons.map(person=>{                    
                return <Person 
                    name= {person.name} 
                    age={person.age}
                    click = {this.switchNameHandler.bind(this,person.name)}
                    nameChange ={this.nameChangeHandler}
                  />
              })
            }            
          </div>   
          :null
        }       

        
        
      </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does This work now'));  lecture 30:understanding jsx
  }
}

export default App;
