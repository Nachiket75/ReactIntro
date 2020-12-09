import React, { Component } from 'react'
import Modal from '../components/UI/Modal/Modal'
import Aux from './Auxilary'

const ErrorHandler = (WrappedComponent,axios) =>{
    return class extends Component {
        state = {
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null}) //for request we are not handling errors only for response we are handling
                return req;
            })

            axios.interceptors.response.use(res=>res,error =>{
                this.setState({error:error});
                
            })
        }

        modalClosedHandler = ()=>{
            this.setState({error:null})
        }

        render(){
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed = {this.modalClosedHandler} >
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}
    


export default ErrorHandler;


