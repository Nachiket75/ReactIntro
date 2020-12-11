import React,{Component} from 'react'
import classes from './Blog.css'
import Posts from './Posts/Posts'

//we are using https://jsonplaceholder.typicode.com/ for GET POSTS and all RESTFUL requests.

//we are using axios package to make RESTFUL http request easily. use npm install axios --save on terminal
// to save this package in npm so that we can use it.
//you can learn more about axios pacakge in github page https://github.com/axios/axios

//npm install --save react-router react-router-dom Router pacakage

class Blog extends Component{   
    render(){
         return(
            <div className={classes.Blog}>
                <section>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </section>
                <Posts/>

            </div>
        )
    }
}

export default Blog;