import React,{Component}from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actionCreators from '../../Store/actions/actionCreator'
import {connect} from 'react-redux'

class Auth extends Component{
    signInHandler = (event) =>{
        event.preventDefault()
        let email = document.getElementById("username").value
        let password = document.getElementById("password").value
        this.props.onAuth(email,password)
    }
    render(){
        return(
            <div className={classes.Auth}>
                <h1>Sign In</h1>
                <form onSubmit={this.signInHandler}>                    
                    <Input inputtype="input" label="username" type="text" id="username" placeholder="Username" minlen={5}/>
                    <Input inputtype="input" label="password" type="password" id="password" placeholder="Password" minlen={7}/>
                    <Button btnType="Success" type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email,password)=> dispatch(actionCreators.auth(email,password))
    }

}

export default connect(null,mapDispatchToProps) (Auth);