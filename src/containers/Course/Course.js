import React,{Component} from 'react'

class Course extends Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h1>_COURSE_TITLE_</h1>
                <p>you selected Course with ID: {this.props.match.params.courseId}</p>
            </div>
        )
    }
}


export default Course;