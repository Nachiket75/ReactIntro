import React,{Component} from 'react'

class Course extends Component{
    state = {
        courseTitle :''
    }
    componentDidMount(){
        this.retrieveTitle();
    }
    componentDidUpdate(){                //we are using nested routing to update course title and id we also called method from componentDidUpdate()
        this.retrieveTitle();
    }
    retrieveTitle(){
        let prop = this.props.location.search;
        prop = prop.substring(6)
        prop = prop.replace(/%20/g, " ");
        if(this.state.courseTitle !== prop)           //to avoid infinite renderring and updating state we use this if statment
            this.setState({courseTitle:prop})
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h1>{this.state.courseTitle}</h1>
                <p>you selected Course with ID: {this.props.match.params.courseId}</p>
            </div>
        )
    }
}


export default Course;