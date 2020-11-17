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
    ]
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

  render() {
    const style ={
        backgroundColor:"white",        
        border: '5px solid cyan',
        font:'inherit',
        padding:'8px',
        margin:'auto 10px',
        cursor:'pointer'


    }
    return (
 
      <div className="App">
        <h1>Hi This is React App</h1>
        <p>This is really working</p>

       
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this,"Nachiket Natekar")}
          nameChange ={this.nameChangeHandler}/>        
          {/* click = {()=>this.switchNameHandler("Nachiket Natekar")}/>         this is alternate way of bind method to pass arguments to function*/} 
          
        {/* click will passs refference of switchNameHandler function to Person function  */}
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person
           name={this.state.persons[2].name} 
           age={this.state.persons[2].age} >My hobbies:Singing</Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}> My hobbies:Sprituality</Person>

        <button 
          style = {style}
          // this is called inline css style 
          onClick ={this.switchNameHandler.bind(this,"Nachiket!! Natekar")} >Switch to full names
        </button>
        {/* <Person name="Nachi" age="25"/>
        <Person name="Adi" age="28"/>
        <Person name="Reva" age="54">My hobbies:Singing</Person>
        <Person name="Shashi" age="61">My hobbies:Sprituality</Person> */}
      </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does This work now'));  lecture 30:understanding jsx
  }
}

export default App;
