import React,{Component} from 'react'
import classes from './Blog.css'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import axios from 'axios'
//we are using https://jsonplaceholder.typicode.com/ for GET POSTS and all RESTFUL requests.

//we are using axios package to make RESTFUL http request easily. use npm install axios --save on terminal
// to save this package in npm so that we can use it.
//you can learn more about axios pacakge in github page https://github.com/axios/axios

class Blog extends Component{
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
        })
    }
    render(){
        return(
            <div >
                <section className={classes.Posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </section>
                <section>
                    <FullPost/>
                </section>
                <section>
                    <NewPost/>
                </section>

            </div>
        )
    }
}

export default Blog;