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
    state ={
        posts:[],
        selectedPostId : null,
        error:false
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({posts:response.data})
            //console.log(response);
        })
        .catch(error=>{
            console.log(error)
            this.setState({error:true})
        })
    }
    postSelectHandler=(id)=>{
        this.setState({selectedPostId:id})
    }
    render(){
        let posts = <p style={{textAlign:"center"}}>Something Went Wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{            
                return <Post                         
                        key={post.id}
                        title={post.title} 
                        Author="Nachiket"
                        clicked = {()=>this.postSelectHandler(post.id)}/>
            })
        }
        
        return(
            <div >
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>

            </div>
        )
    }
}

export default Blog;