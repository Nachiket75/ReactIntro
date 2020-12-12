import React from 'react'
import classes from './Post.css'
//import {withRouter} from 'react-router-dom'

const post = (props) =>{
    //console.log(props)
    return(
    <article className={classes.Post} onClick={props.clicked}> 
        <h1>{props.title}</h1>
        <div className="Info">
            <div className={classes.Author}>{props.Author}</div>
        </div>
    </article>
    )
}

export default post;
//export default withRouter(post);