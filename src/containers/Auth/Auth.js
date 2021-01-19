import React,{Component}from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actionCreators from '../../Store/actions/actionCreator'
import {connect} from 'react-redux'


class Auth extends Component{
    state ={
        isSignUp:true
    }

    signInHandler = (event) =>{
        event.preventDefault()
        let email = document.getElementById("username").value
        let password = document.getElementById("password").value
        this.props.onAuth(email,password,this.state.isSignUp)
    }
    switchAuthModeHandler = () =>{
        this.setState(prevState =>{
            return {isSignUp:!prevState.isSignUp}
        })
    }    

    render(){    
        let errormessage = null;
        if(this.props.error){
            errormessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return(
            <div className={classes.Auth}>
                <h1>Sign In</h1>
                {errormessage}
                <form onSubmit={this.signInHandler}>                    
                    <Input inputtype="input" label="username" type="text" id="username" placeholder="Username" minlen={5}/>
                    <Input inputtype="input" label="password" type="password" id="password" placeholder="Password" minlen={7}/>
                    <Button btnType="Success" type="submit">Submit</Button> <br/>
                    <Button 
                        btnType="Danger"
                        clicked = {this.switchAuthModeHandler}
                    >
                        SWITCH TO {this.state.isSignUp?'SIGNIN':'SIGNUP'}
                    </Button> 
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{        
        error:state.auth.error
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email,password,isSignUp)=> dispatch(actionCreators.auth(email,password,isSignUp))
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (Auth);