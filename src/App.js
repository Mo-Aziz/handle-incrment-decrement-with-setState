import React, { Component } from "react";

class App extends Component{
constructor(){
super();
this.state = {
  count: 0
}

this.handleIncrement = this.handleIncrement.bind(this)
this.handleDecrement = this.handleDecrement.bind(this)
}
handleIncrement(){
  this.setState(prevState =>{return{ count: prevState.count +1}})
 }

 handleDecrement(){
   this.setState(prevState =>{return{ count: prevState.count -1}})}
render(){
  return(
    <div>
      <h1>{this.state.count} </h1>
      <button onClick={this.handleIncrement}>increase </button>
      <button onClick={this.handleDecrement}>decrease </button>
      </div>
  )
}
}
export default App