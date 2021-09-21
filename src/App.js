import React from "react";
// npm i axios
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// npm i gh-pages
// gh-pages는 github에서 나에게 무료 웹사이트를 제공한것을 사용할수있게 업로드시켜줌
// 1) package.json에 아래와같은것을 추가
// "homepage" : "https://(내 깃허브 username).github.io/(깃허브에 등록된 프로젝트명)"
// 여기서 유저네임이랑 프로젝트명은 전부 소문자여야함
// 1.5) npm run build 를 하면 build폴더가 생성됨
// 2) scripts부분에 "deploy": "gh-pages -d build" 추가(build 폴더를 업로드하는것)(-d는 디렉토리라는뜻 build 자리엔 폴더명을 넣으면됨)
// 3) scripts부분에 "predeploy": "npm run build" 추가(deploy를 호출할때마다 predeploy를 먼저 호출함)
// https://june.github.io/movie_app_2021

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    // 콘솔찍을때 저렇게 찍는건 좋지않음. ES6 문법을 활용하자
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    // this.setState({movies:movies});
    // 우린 최신 자바스크립트를 쓰기때문에 이것또한 짧아져야함
    // this.setState({movies}); //이렇게 짧게 쓸수 있음
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // setTimeout(() => { //timeout은 JS문법임
    //   this.setState({isLoading : false});
    // }, 6000); //6초뒤에 isLoading을 false로 전환
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; //매번 this.state.isLoading을 하지않기 위해 사용한 ES6 문법
    // JS문법 삼항연산자 : 조건 ? "참일때 나올값" : "거짓일때 나올값"
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            { movies.map(
            (
              movie //map을 쓰면 항상 return을 해야하지만 이렇게 바꾸면 안해도됨
            ) => (
              <Movie
                // map은 key를 정해주지않으면 오류발생(하지만 작동은함)
                key={movie.id} //키는 unique해야한다. 그래서 뭐... id준듯(이건 json에서 정해서 온게 아니라 우리가 정한것 다른것해도됨)
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

// : movies.map((movie) => {
//     console.log(movie);
//     // map을 쓰면 항상 return 해줘야함
//     return (
//       <Movie
//         id={movie.id}
//         year={movie.year}
//         title={movie.title}
//         summary={movie.summary}
//         poster={movie.medium_cover_image}
//       />
//     );
//   })}
