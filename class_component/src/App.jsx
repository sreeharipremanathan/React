// import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <h1>welcome class components</h1>
//     )
//   }
// }
// export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
class App extends React.Component{
  constructor(props){
    super()
    this.state={
      color:"red",
      size:"500px",
      name:props.name,
    }
  }
  render(){
    return(
      <div>
        <h1>welcome to class components</h1>
        <p>{this.state.color}</p>
        <p>{this.state.size}</p>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
export default App