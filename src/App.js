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

  switchNameHandler = () => {
    this.setState(
     {
      persons: [
        {name:'Nachiket Natekar', age:25},
        {name:'Aditya Natekar', age:28},
        {name:'Revati Natekar', age:54},
        {name:'Shashikant Natekar', age:61}
      ]
     }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi This is React App</h1>
        <p>This is really working</p>

       
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.switchNameHandler}/>        
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

        <button onClick ={this.switchNameHandler} >Switch to full names</button>
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
