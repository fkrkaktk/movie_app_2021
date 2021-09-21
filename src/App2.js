// import React from "react";
// // npm i prop-types => 프롭스의 타입확인용
// import Proptypes from "prop-types";

// // 매순간 setState를 호출할때마다 react에선 새로운 state와 함께 render function을 호출할거임(리랜더 한다고하자)

// class App extends React.Component{
//   // return이 아닌 이유는 function이 아니라 class이기 때문
//   // App은 class component이고 React component로 부터 확장되고 스크린에 표시됨
//   // function 컴포넌트 잘쓰다가 class 컴포넌트를 쓰는 이유 중 하나는 state를 쓰기위해서임
//   state = {
//     // state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변화한다
//     count : 0,
//   };
//   // setstate를 한다는것은 새로운 state를 준다는것임.
//   // 그래서 setstate를 호출하면 react에서 state를 새롭게 받은것으로 refresh하고 
//   // render function을 호출해서 client에게 보여줌
//   // 변화하는 부분의 state만 변경시키고 나머지는 그대로 감
//   // setState를 쓰지않고 그냥 this.state.count = 1 같이 하면 오류가 발생하고 작동하지않음
//   // 그리고 setState를 써야 render function이 작동함 render function이 작동함으로써 화면이 깜박이지않고 변경됨
//   add = () => {
//     // 이렇게 state에 의존하는 방식으로 짜는 코드는 좋지않음. 나중에 수정할것
//     // setState에서 .state를 사용하는 것을 하고싶어 하지않을것임
//     // 내가 하고싶은건 현재(current) state를 얻고싶은것뿐
//     // this.setState({count:this.state.count + 1});

//     // 이렇게 current를 쓰는게 react에서 외부의 상태에 의존하지않는 가장 좋은 방법이다!!!!!!!!!!!
//     this.setState(current => ({count : current.count + 1}));
//   };
//   minus = () => {
//     this.setState({count:this.state.count - 1});
//   };
//   render(){
//     // 여기서 this를 쓰는 이유는 App이 Class component이기 때문이다
//     // function component 였으면 {state.count}라고 썼음
//     return <div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>;
//   }
// }

// export default App;
