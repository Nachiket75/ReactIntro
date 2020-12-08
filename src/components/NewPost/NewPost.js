import React,{Component} from 'react'
import classes from './NewPost.css'
import axios from 'axios'

class NewPost extends Component {
    state = {
        title:'',
        content : '',
        author: 'Nachiket'
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
            })
    }

    render(){
        return(
            <div className={classes.NewPost}>
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