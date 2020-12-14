import React,{Component} from 'react'
import classes from './FullPost.css'
import axios from 'axios';

class FullPost extends Component{
    state = {
        loadedPost:null
    }
    componentDidMount(){
        console.log(this.props)
        if(this.props.match.params.id && !isNaN(this.props.match.params.id)){       //isNan is added so that when user visit NewPost link it wont receive id which is integer it will receive a text link "/new-post" in that case it will generate error in console to avoid that we use it.
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!== this.props.id)){
                console.log(this.props.match.params.id)
                axios.get('/posts/'+this.props.match.params.id)
                .then(response=>{
                this.setState({loadedPost : response.data})
                //console.log(response)
            })
            }            
        }     
    }

    deletePostHandler = () =>{
        axios.delete('/posts/'+this.props.id)
            .then(response =>{
                console.log(response)
            })
    }

    render(){
        let post = <p style={{textAlign:"center"}}>Please Select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:"center"}}>Loading...</p>;
        }
        if(this.state.loadedPost ){
            post=(
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>
            )

        }
        
        return post;
    }
    
}

export default FullPost;