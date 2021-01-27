import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/actions/actionCreator'
import {Redirect} from 'react-router-dom'

class Logout extends Component{
    componentDidMount(){
        this.props.onLogout();
    }
    render(){
        return(
           <Redirect to="/auth" />
        )
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        onLogout:()=> dispatch(actionCreators.logout())
    }
}
export default connect(null,mapDispatchToProps) (Logout)
