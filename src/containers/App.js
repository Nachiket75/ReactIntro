import React, { Component } from 'react';
import allclasses from './App.css';
import Persons from '../components/Persons/Persons'; //Persons.js file contains in this path components/Persons/Person/Person
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id:1, name:'Nachi', age:25},
      {id:2, name:'Adi', age:28},
      {id:3, name:'Reva', age:54},
      {id:4, name:'Shashi', age:61}
    ],
    showPersons:false   
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
//Component update life cycle (for state changes)  is done by adding shouldComponentUpdate() and componentDidUpdate()  in app.js  


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
    if(this.state.showPersons){     
     personsState =(
      <div>
         {
           <Persons 
            persons = {this.state.persons}
            click = {this.deleteNameHandler}
            nameChange = {this.nameChangeHandler}
            />
         }            
      </div>   
    );   
   
  }

    return (           
      <div className={allclasses.App}>
        <Cockpit 
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          onClick = {this.togglePersonHandler}
        />    
        {personsState}       
 
      </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does This work now'));  lecture 30:understanding jsx
  }
}

export default App;

//add Radium above App is called higher order component i.e wrapping you component and adding some extra functionality 
