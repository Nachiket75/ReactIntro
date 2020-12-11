import React, {Component} from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import classes from './Posts.css'

class Posts extends Component{
    state ={
        posts:[],
        selectedPostId : null,
        error:false
    }
    componentDidMount(){
        axios.get('/posts')
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
            <section className={classes.Posts}>
                {posts}
            </section>
        )
    }
}


export default Posts;