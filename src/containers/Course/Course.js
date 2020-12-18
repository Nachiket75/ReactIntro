import React,{Component} from 'react'

class Course extends Component{
    state = {
        courseTitle :''
    }
    componentDidMount(){
        let prop = this.props.location.search;
        prop = prop.substring(6)
        prop = prop.replace(/%20/g, " ");
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