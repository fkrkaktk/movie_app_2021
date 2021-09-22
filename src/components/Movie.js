import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

// 컴포넌트가 state를 필요로 하지않는다면 class컴포넌트일 필요가 없다.
// function componenet로 만들어도 충분!!!

// Movie({})에서 중괄호 안에 있는게 전부 prop임
function Movie({id, year, title, summary, poster, genres }) {
  return (
    // 이렇게 pathname에 있는 링크에 프롭스로 데이터를 전달해 줄수 있음. 클릭해서 들어가보면 보낸 props가 다 와있음
    <Link to={{
      pathname:`/movie/${id}`,
      // prop에 있는거 전부다에 Link를 걸어버림
      state: {
        year:year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movie">
        {/* alt는 그림에 마우스 올렸을때 뜨는 설명이다. 시각장애인들을 위한것 */}
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          {/* 자바스크립트에서 스타일을 쓸려면 style={{}} 를 쓰면됨 */}
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          {/* map을 쓰게될 경우 key를 필요로 하지만 map에서 이렇게 idx칸을 만들어서 줘도 됨(idx는 번호임) */}
          <ul className="movie__genres">{genres.map((genre, idx) => <li key={idx} className="genres__genre">{genre}</li>)}</ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
