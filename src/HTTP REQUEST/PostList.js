import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              emsg:""
         }
     }
     componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(Response=>{
             console.log(Response)
             this.setState({
                 posts:Response.data,
                
             })
         })
         .catch(error => {
             console.log(error)
             this.setState({
                emsg:"Error reteriving data"
             })
         })
     }
     
    render() {
        const{posts,emsg}=this.state
        return (
            <div>
                List of posts{
                    posts.length?
                    posts.map(post=><div key ={post.id}> {post.id}<br/>{post.body}<hr/></div>):null
                }
                {emsg ? <div><h1>{emsg}</h1></div>:null}
            </div>
        )
    }
}

export default PostList
