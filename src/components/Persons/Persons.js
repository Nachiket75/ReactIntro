import React,{PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent { 
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons || 
  //      nextProps.nameChange!== this.props.nameChange ||
  //      nextProps.click!== this.props.click){
  //     return true;  
  //   }
  //   else{
  //     return false;
  //   }
  // }    ***** what shouldComponentUpdate() does This all can be done by simply importing pureComponent and
  //      using it in class by extending it******

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  
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