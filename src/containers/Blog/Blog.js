import React,{Component} from 'react'
import classes from './Blog.css'
import Posts from './Posts/Posts'
import {Route,NavLink,Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

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
                            <li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
                            <li><NavLink to="/new-post" activeClassName={classes.active}>New Post</NavLink></li> 
                            {/* inside the quotes are absolute path if you want relative path you have to add below code
                            this.props.match.url + '/new-post' */}
                        </ul>
                    </nav>
                </section>
                {/* <Route path="/" exact render={()=> <h1>Home this line will only visible in "/" NavLink as exact keyword is used</h1>} />
                <Route path="/" render={()=><h1>Home2 this line will visible in both "/" NavLink and "/new-post" NavLink</h1>}/>
                 */}
                    <Route path="/" exact component={Posts}/>
                 <Switch>                    
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                 </Switch>
                 
            </div>
        )
    }
}

export default Blog;