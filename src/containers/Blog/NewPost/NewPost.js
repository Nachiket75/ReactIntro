import React,{Component} from 'react'
import classes from './NewPost.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class NewPost extends Component {
    state = {
        title:'',
        content : '',
        author: 'Nachiket',
        submitted:false
    }

    postDataHandler=()=>{
        const postData = {
            title : this.state.title,
            body : this.state.content,
            author : this.state.author
        }
        axios.post('/posts',postData)
            .then(response =>{
                console.log(response);
                // this.setState({submitted:true})
                //this.props.history.push("/posts") this will work but you can go to previous page i.e /new-post link by clicking back button hence we use replace as given below.
                this.props.history.replace("/posts")// this will work same as Redirect package
            })
    }
    componentDidMount(){
        //console.log(this.props)
    }

    render(){
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to="/posts"/>      //conditional redirect
        }
        return(
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input 
                type="text" value={this.state.title}
                onChange={(event)=>this.setState({title:event.target.value})}
                ></input>
                <label>Content</label>
                <textarea 
                    rows="4" 
                    value = {this.state.content}
                    onChange={(event)=>this.setState({content:event.target.value})}                    
                />
                <label>Author</label>
                <select 
                    value={this.state.author}
                    onChange={(event)=> this.setState({author:event.target.value})}>
                    <option value="Nachiket">Nachiket</option>
                    <option value="Aditya">Aditya</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        )
    }
}

export default NewPost;