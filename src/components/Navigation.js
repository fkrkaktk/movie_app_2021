import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return <div>
        {/* a href="/" 로 하면 누를때마다 페이지가 새로 만들어져서 안좋음 */}
        {/* 그래서 대신 Link to를 사용 */}
        {/* Link to는 반드시 라우터안에서만 사용가능하다(이 파일을 지금 App.js에서 보면 HashRouter안에 있음) */}
        <Link to="/">Home</Link>
        {/* 링크를 눌렀을때 뜨는 창에 props를 전달해 주고 싶을때 쓰는 방법 */}
        {/* <Link to={{
            pathname:"/about",//이건 가고자 하는 주소(여기에 파라미터를 붙여서 보내도됨 ?id=fkjsdkf같은것. 근데 기본값으로 보내는게 더 깔끔하고 좋음)
            state:{//여기에 보내고싶은 정보 담으면 될듯
                fromNavigation : true
            }
        }}>About</Link> */}
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;