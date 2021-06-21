import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comment:'',
              subject:'Angular'
         }
     }
     
     Usernamechanger=(event)=>{
this.setState({
    username:event.target.value,
})
 }

 commenthandler = event =>{
     this.setState({
         comment:event.target.value
     })
 }
 subjecthandler= event =>{
     this.setState({
         subject:event.target.value
     })
 }
 setalert=(event)=>{
     alert(`${this.state.username} ${this.state.comment} ${this.state.subject}`)
     event.preventDefault()
   
 }
     
    render() {
//const {username,comment,subject}=this.setState
//use directly username and same like others

        return (<form onSubmit={this.setalert}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.Usernamechanger} />
            </div>
            <div>
                <label>Comment</label>
                <textarea value={this.state.comment} onChange={this.commenthandler}></textarea>
            </div>
            <div>
                <label>Subject</label>
                <select  value={this.state.subject} onChange={this.subjecthandler}>
<option>React</option>
<option>HTML</option>
<option>JAVA</option>
<option>C#</option>
<option>Angular</option>

                </select>
            </div>
            
            
            <input type='submit'/>
            
            
            </form>
        )
    }
}

export default Form
