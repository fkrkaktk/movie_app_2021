import React from "react";
import { Redirect } from "react-router";

// function Detail({location}){ //이렇게 적으면 받아오는 거의 전체가 아니라 location부분만 받아옴 전체 모양은 원래 {history : {...}, location : {...}, match : {...}...}이였음
//     console.log(location); //카드를 클릭안하고 그냥 페이지로 가면 props를 보내온게 없어서 state가 undefined로 뜰거임
//     return <span>Hello</span>
// }

// 위의 function 컴포넌트를 class컴포넌트로 변환
class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    // console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
	// componentDidMount 보다 render가 먼저 실행됨.
  render() {
		const {location} = this.props;
		if(location.state){
			return <span>{location.state.title}</span>;
		} else{
			return null;
		}
  }
}

export default Detail;
