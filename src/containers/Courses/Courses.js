import React, {Component} from 'react';
import classes from './Courses.css'
import {NavLink} from 'react-router-dom';

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
                <h1 style={{textAlign:'center'}}>Lakehead University Courses</h1>
                <section className = {classes.Courses}>
                    {
                        this.state.courses.map(course => {
                            return (
                                <NavLink 
                                    key={course.id} 
                                    to={{
                                        pathname:this.props.match.url+ "/" + course.id ,
                                        search:"?title"+course.title
                                    }} >
                                    <article className={classes.Course} >{course.title}</article>
                                </NavLink>                            
                            )
                        })
                    }
                </section>
            </div>

        )
    }
}

export default Courses;