import React,{Component} from 'react'
import classes from './Blog.css'
import Posts from './Posts/Posts'
import {Route} from 'react-router-dom'

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
                {/* <Route path="/" exact render={()=> <h1>Home this line will only visible in "/" link as exact keyword is used</h1>} />
                <Route path="/" render={()=><h1>Home2 this line will visible in both "/" link and "/new-post" link</h1>}/>
                 */}
                 <Route path="/" exact component={Posts}/>

            </div>
        )
    }
}

export default Blog;