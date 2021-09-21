// import React from "react";

// // React component의 LifeCycle
// // Life Cycle componenet
// // mounting() : 컴포넌트가 처음 실행되는 것
// // mounting에서 호출되는 순서
// // 1. constructor() : 이건 react에서 오는게 아니라 javascript에서 class를 만들때 호출되는것(자바스크립트에서 호출된다는것이 중요)
// // constutor가 먼저 동작하고 그 뒤에 render function에 있는 것이 동작함
// // 컴포넌트가 마운트 될때, 컴포넌트가 스크린에 표시될때, 컴포넌트가 웹사이트에 갈때 constructor를 호출함(세개다 비슷한 말인듯)
// // 2. render()
// // 3. componentDidMount() : render로 컴포넌트를 dom에 부착한 후 mount가 완료된 후 호출, 컴포넌트가 마운트 되자마자 호출

// // updating() : 일반적인 업데이트를 뜻함
// // updating은 기본적으로 setState를 호출할때 실행됨
// // updating()의 호출순서
// // 1. 내가 뭔가를 바꿈
// // 2. render()
// // 3. componentDidUpdate() : 

// // unmonunting() : component 가 죽은것을 뜻함(페이지가 바뀌거나 state를 이용해서 component가 교체되었거나 하는것)
// // 호출하는것은 단 하나! componentWillUnmount()
// // 1. componentWillUnmount() : component를 떠날때 호출됨(다른페이지로 가거나하는것)

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     // constutor가 먼저 동작하고 그 뒤에 render function에 있는 것이 동작함
//     console.log("hello");
//   }
//   state = {
//     count : 0,
//   };
//   add = () => {
//     this.setState(current => ({count : current.count + 1}));
//   };
//   minus = () => {
//     this.setState({count:this.state.count - 1});
//   };
//   componentDidMount(){
//     console.log("component rendered")
//   }
//   componentDidUpdate(){
//     console.log("I just Updated");
//   }
//   componentWillUnmount(){
//     console.log("Goodbye, cruel world");
//   }
//   render(){
//     console.log("I'm rendering")
//     return <div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>;
//   }
// }

// export default App;
