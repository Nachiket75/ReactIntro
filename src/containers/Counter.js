import React,{Component} from 'react';
import CounterControl from '../components/CounterControl/CounterControl'
import CounterOutput from '../components/CounterOutput/CounterOutput'

class Counter extends Component{
    state={
        counter:0
    }
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
                <CounterOutput value={this.state.counter}/>
                <CounterControl label="Inc" clicked={()=>this.counterChangedHandler('inc')}/>
                <CounterControl label="Dec" clicked={()=>this.counterChangedHandler('dec')}/>
                <CounterControl label="Add 5" clicked={()=>this.counterChangedHandler('add',5)}/>
                <CounterControl label="Subtract 5" clicked={()=>this.counterChangedHandler('sub',5)}/> <br/><br/>
                <CounterControl label="Reset" clicked={()=>this.counterChangedHandler('res')}/>
            </div>
        )
    }
}


export default Counter;