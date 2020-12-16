import React, {Component} from 'react';
import classes from './Courses.css'

class Courses extends Component{
    state = {
        courses:[
            {id:1, title: 'Natural Language Processing'},
            {id:2, title: 'Graduate Seminar'},
            {id:3, title: 'Ethical issues in computer science'},
        ]
    }
    render(){
        return(
            <div>
                <h1>Lakehead University</h1>
                <section className = {classes.Courses}>
                    {
                        this.state.courses.map(course => {
                            return <article className={classes.Course} key={course.id}>{course.title}</article>
                        })
                    }
                </section>
            </div>

        )
    }
}

export default Courses;