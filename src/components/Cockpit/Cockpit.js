import React,{useEffect} from 'react'
import allclasses from './Cockpit.css'

const cockpit = (props) => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect')
        //Http request...
        setTimeout(() =>{
            alert('Saved data to cloud')
        },1000);     //every time user do something event this will alert if you dont control useEffect by adding condition below                  

    },[props.persons]);       //we're controlling useEffect here using [props.persons] condition userEffect will alet whenever Persons copmonent changes.       
    //we can use only [] i.e blank to run alert only once
    //useEffect is used in functional component to perform http request and do extra activity as this useEffect function alsways executed in fucntion based component    

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
