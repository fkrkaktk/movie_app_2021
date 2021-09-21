// import React from "react";
// // npm i prop-types => 프롭스의 타입확인용
// import Proptypes from "prop-types";


// // function Food(props){
// //   console.log(props);
// //   return <h1>I like {props.fav}</h1>
// // }

// const foodILike = [{
//   id : 1,
//   name: "Kimchi",
//   image:
//     "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//   rating : 5
// },
// {
//   id : 2,
//   name: "Samgyeopsal",
//   image:
//     "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//   rating : 4.5
// },
// {
//   id : 3,
//   name: "Bibimbap",
//   image:
//     "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//   rating : 4
// },
// {
//   id : 4,
//   name: "Doncasu",
//   image:
//     "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//   rating : 3.5
// },
// {
//   id : 5,
//   name: "Kimbap",
//   image:
//     "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//   rating : 3
// }]

// // 자식 컴포넌트
// function Food({ name, picture, rating}){
//   // props에 담겨서 온 fav를 그냥 저렇게 적고 바로 써도 됨
//   return <div>
//     <h2>I like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     {/* alt를 주는 이유는 시각장애인용 인것 같음 */}
//     <img src={picture} alt={name}/>
//   </div>
// }

// // props 체크
// // 틀려도 작동을 안하지는 않음. console창에 따로 오류메세지가 뜸
// // 이걸 써놔야 프롭스를 잘못 보냈을때 오류메세지를 보고 고칠수있음
// // isRequired를 넣으면 반드시 기입한 사항과 같아야하며 isRequired를 빼면 기입한 사항이거나 undefined 여도 됨.
// // undefined라는건 아예 없어도 된다는 말(json으로 받은 항목에서 아예 빠져서 와도 오류가 없다는것. 예를 들어 name picture만 있고 rating은 빠져도 됨)
// Food.propTypes = {
//   name: Proptypes.string.isRequired, //name은 proptype이 string이어야한다.
//   picture: Proptypes.string.isRequired, //picture은 proptype이 string이어야 한다.
//   // rating: Proptypes.string.isRequired //rating은 proptype이 string이어야한다
//   // rating: Proptypes.number.isRequired //rating은 proptype이 number이어야한다
//   rating: Proptypes.number //rating은 숫자 이거나 undefined이면 됨(근데 다른 타입이면 오류 뜸)
// }

// // 2번 방식
// // 아래쪽에 주석처리된 map으로 하는것과 똑같은 결과가 나옴
// // 근데 함수를 한개 더 만드는것보단 그냥 1번 방식으로 하는게 더 나을듯
// // function renderFood(dish){
// //   console.log(dish);
// //   // Food는 위에 함수로 만들때 name값과 picture값을 넣어라고 만들었음
// //   return <Food name={dish.name} picture={dish.image}/>
// // }

// // 부모 컴포넌트
// function App() {
//   return (
//     <div className="App">
//       {/* 1번 방식 */}
//       {/* 중괄호 안에 적어야 javascript가 됨. 그냥 적으면 text로 봄 */}
//       {/* 여기서 dish는 array안의 각각의 요소를 나타냄*/}
//       {/* foodILike.map(dish){
//             <Food name={dish.name} picture={dish.image} />
//       } */}
//       {/* 위에껄 줄이면 밑에꺼가 됨. */}
//       {foodILike.map(dish => (
//         // key를 안줘도 작동은 아는데 오류가 뜸
//         <Food 
//           key={dish.id} 
//           name={dish.name} 
//           picture={dish.image} 
//           rating={dish.rating}
//         />
//       ))}

//       {/* 2번 방식 */}
//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

// export default App;
