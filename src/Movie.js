import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 컴포넌트가 state를 필요로 하지않는다면 class컴포넌트일 필요가 없다.
// function componenet로 만들어도 충분!!!

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      {/* alt는 그림에 마우스 올렸을때 뜨는 설명이다. 시각장애인들을 위한것 */}
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
				{/* 자바스크립트에서 스타일을 쓸려면 style={{}} 를 쓰면됨 */}
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
