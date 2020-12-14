import React, {Component} from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import classes from './Posts.css'
import {NavLink} from 'react-router-dom'

class Posts extends Component{
    state ={
        posts:[],      
        error:false
    }
    componentDidMount(){
        //console.log(this.props)
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
       this.props.history.push('/'+id);  //history.push will add url specified in parameter to the top of the stack.
    }

    render(){
        let posts = <p style={{textAlign:"center"}}>Something Went Wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{            
                return(                    
                        <Post                         
                            key={post.id}
                            title={post.title} 
                            Author="Nachiket"
                            clicked = {()=>this.postSelectHandler(post.id)}/>                   
                )
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