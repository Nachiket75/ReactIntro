import React,{Component} from 'react';
import CounterControl from '../components/CounterControl/CounterControl'
import CounterOutput from '../components/CounterOutput/CounterOutput'
import {connect} from 'react-redux'
import * as actionCreators from '../Store/ActionCreators'

class Counter extends Component{
    // state={
    //     counter:0
    // }
    counterChangedHandler = (action,value) =>{
        switch(action){
            case 'inc':
                this.setState((prevState)=>{return {counter:prevState.counter+1}})
                break;
            case 'dec':
                this.setState((prevState)=>{return {counter:prevState.counter-1}})
                break;
            case 'add':
                this.setState((prevState)=>{return {counter:prevState.counter+value}})
                break;
            case 'sub':
                this.setState((prevState)=>{return {counter:prevState.counter-value}})
                break;
            case 'res':
                this.setState({counter:0})
                break;
            default:
                this.setState({counter:0})
                break;
        }
    }
    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr}/>
                {/* <CounterControl label="Inc" clicked={()=>this.counterChangedHandler('inc')}/> */}
                
                {/* <CounterControl label="Dec" clicked={()=>this.counterChangedHandler('dec')}/> */}
                {/* <CounterControl label="Add 5" clicked={()=>this.counterChangedHandler('add',5)}/>
                <CounterControl label="Subtract 5" clicked={()=>this.counterChangedHandler('sub',5)}/> <br/><br/> */}
                {/* <CounterControl label="Reset" clicked={()=>this.counterChangedHandler('res')}/> */}

                <CounterControl label="Inc" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Dec" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 10" clicked={this.props.onSubCounter}/> <br/><br/>
                <CounterControl label="Reset" clicked={this.props.onReset}/>
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResults=>(
                        <li key={strResults.id} onClick={()=>this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    ))}
                    
                </ul>

            </div>
        )
    }
}

const mapStateToProps =state=> {
    return{
        ctr : state.ctr.counter,
        storedResults:state.res.results
    }    
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter :()=> dispatch(actionCreators.increment()),
        onDecrementCounter :()=> dispatch(actionCreators.decrement()),
        onAddCounter :()=> dispatch(actionCreators.add(10)),
        onSubCounter :()=> dispatch(actionCreators.subtract(10)),
        onReset : ()=> dispatch({type:"RESET"}),
        onStoreResult : (counterRef) => dispatch(actionCreators.storeResult(counterRef)),
        onDeleteResult : (id) => dispatch(actionCreators.deleteResult(id))        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);