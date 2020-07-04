import React from 'react';

class App extends React.Component{
  state={
    count: 0
  };
  add=()=>{
    this.setState(current =>({count: current.count++}));
  };
  minus=()=>{
    this.setState(current =>({count: current.count--}));//setState에서 this.state등을 하는 것은 좋지 않음 current쓰는 방식 알기, setState할때마다 render()함수가 다시 실행
  };
  componentDidMount(){
    console.log("Component rendered");
  }
  componentDidUpdate(){
    console.log("Component Updated");
  }
  render(){
    console.log("I'm rendering");
    return (<div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>)
  }

}

export default App;
