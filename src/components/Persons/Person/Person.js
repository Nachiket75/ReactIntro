import React,{Component} from 'react'
import classes from './Person.css' 
import Aux from '../../../hoc/Auxilary'
import PropTypes from 'prop-types'
// import .css file is called external css style 
//import classes from './Person.css' is called use of css moduling

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef()
    }
    componentDidMount(){
        // this.inputElement.focus();
        // ref = {(inputEl) => {this.inputElement = inputEl}} 
        this.inputElementRef.current.focus()
    }
    render() {
        console.log("Person.js is rendering ")
        return (
            //<div className={classes.Person} >
 //<React.Fragment className={classes.Person}> you can also use built in Hoc(higher order component) React.Fragment instead of creating Aux component using Aux.js
            <Aux cssClass={classes.Person}> 
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old </p>
                {/* props.click will execute switchandler function of app.js from here when paragraph is clicked*/}
                <p>{this.props.children}</p>
                <input 
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.nameChange} 
                    value={this.props.name}>
                    
                </input>
            
            </Aux>
            //</React.Fragment> 
            //</div>
        )
    //{Math.floor(Math.random()*30)} years old
    }
}

Person.prototypes = {
    onClick:PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person;        