import React,{Component} from 'react'
import classes from './AddPerson.css'
class AddPerson extends Component{
    state = {
        name:"",
        age:""
    }

    nameChangeHandler =(event)=>{
        this.setState({name:event.target.value})
    }
    ageChangeHandler =(event)=>{
        this.setState({age:event.target.value})
    }


    render(){
        return(
            <div>                
                <input className={classes.Input} type="text" name="name" placeholder="Name" onChange={this.nameChangeHandler}/>
                <input className={classes.Input} type="text" name="age" placeholder="Age" onChange={this.ageChangeHandler}/>
                <button className={classes.Button} onClick={()=>this.props.personAdded({name:this.state.name,age:this.state.age})}>ADD PERSON</button>
            </div>
        )
    }
}

export default AddPerson;