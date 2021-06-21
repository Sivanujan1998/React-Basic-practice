import React, { Component } from 'react'

 class Usergreetings extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIN:true
         }
     }
     
    render() {
        //method 1
        /*
        if(this.state.isLoggedIN){
            return <div>welcome Sivanujan</div>
        }else{
            return <div>welcome Guest</div>
        }
        */

       //method2 
       // declare message variable  
       //ed - let message

       //method3 - ternary
      /* return(
       this.state.isLoggedIN?
        <div> Welcome Guest</div>:<div>Welcome Sivanujan
        </div>

      )*/

       //method4
       return this.state.isLoggedIN && <div>Welcome Sivanujan</div>
    }
}

export default Usergreetings
