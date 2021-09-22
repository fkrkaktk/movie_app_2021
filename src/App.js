import React from "react";
// npm install react-router-dom
// HashRouter는 주소 뒤에 #이 붙고 BrowserRouter는 주소뒤에 아무것도 안붙음
// 깃허브 페이지에 업로드할땐 BrowserRouter보다 HashRouter가 더 낫다 그래서 HashRouter쓰는듯
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return (
  <HashRouter>
    <Navigation/>
    {/* router는 렌더링 할때 path를 보고 하는데 /home/introduction 이렇게하면 home 라우터랑 introduction라우터가 합쳐진게 나옴 */}
    {/* exact를 빼면 /자체를 라우터로 여겨서 /가 들어가면 일단 home을 렌더링하고 */}
    {/* 그뒤에 /가 들어간 /about을 렌더링해서 home만 띄우고 싶은데 죄다 떠버림 */}
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    {/* movie.js 에서 id를 변수로 줘서 여기서 id는 변수입니다를 표시하기위해 :id로 한것 */}
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  );
}

export default App;