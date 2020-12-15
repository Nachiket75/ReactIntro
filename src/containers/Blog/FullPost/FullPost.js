import React,{Component} from 'react'
import classes from './FullPost.css'
import axios from 'axios';

class FullPost extends Component{
    state = {
        loadedPost:null
    }
    componentDidMount(){
     //console.log(this.props)
     this.loadData()
    }
    componentDidUpdate(){           //This is added when user click on any post it should load its full post everytime which was not happening in last commit
        this.loadData()        
    }

    loadData(){       
        if(this.props.match.params.id ){       
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!== +this.props.match.params.id)){
             //   console.log(this.props.match.params.id)
                axios.get('/posts/'+this.props.match.params.id)
                .then(response=>{
                this.setState({loadedPost : response.data})
                //console.log(response)
                 })
            }            
        }  
    }

    deletePostHandler = () =>{
        axios.delete('/posts/'+this.props.match.params.id)
            .then(response =>{
                console.log(response)
            })
    }

    render(){
        let post = <p style={{textAlign:"center"}}>Please Select a Post!</p>;
        if(this.props.match.params.id){
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