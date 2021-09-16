import React from "react";

// function Food(props){
//   console.log(props);
//   return <h1>I like {props.fav}</h1>
// }

function Food({ name, picture }){
  // props에 담겨서 온 fav를 그냥 저렇게 적고 바로 써도 됨
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>
}

const foodILike = [{
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
},
{
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
},
{
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
},
{
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
},
{
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
}]

function App() {
  return (
    <div className="App">
      {/* 중괄호 안에 적어야 javascript가 됨. 그냥 적으면 text로 봄 */}
      {/* 여기서 dish는 array안의 각각의 요소를 나타냄*/}
      {/* map(dish){
        <Food name={dish.name} picture={dish.image} />
      } */}
      {/* 위에껄 줄이면 밑에꺼가 됨. */}
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
