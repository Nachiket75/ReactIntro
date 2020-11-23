import React from 'react'
import allclasses from './Cockpit.css'

const cockpit = (props) => {
    const classes = [];
    let btnClass = [allclasses.button]
    if(props.showPersons)
        btnClass.push(allclasses.Red); 
    //dyanmically assigning css classed
    if(props.persons.length<=4){
      classes.push(allclasses.bold)
      classes.push(allclasses.green)
    }
    if(props.persons.length<=2){
      classes.pop(allclasses.green)
      classes.push(allclasses.red)
      // pop will remove the class and push will add the css class
    } 
    
    return (    
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>      
            {/* classes.join is used to to join more than one class  */}
            <button           
                className={btnClass.join(' ')}
                onClick ={props.onClick} >Show/Hide Person
            </button>    
        </div>
    )
    
}

export default cockpit;
