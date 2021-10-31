import React from "react";
import "./MovieItem.css";
//import { Link, useHistory } from "react-router-dom";

export default function MovieItem(props) {
  //const history = useHistory();

  //console.log(history);

  // const redirect = () => {
  //   history.push(`/details/${props.movie.id}`);
  // };
  const IMG_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie">
      <img src={`${IMG_API}${props.img}`} alt="..." />
      <div className="movie-info">
        <h5>{props.title}</h5>
        <span>{props.vote}</span>
      </div>
      <div className="movie-over">
        <button type="button" className="btn btn-warning">
          Watch
        </button>
      </div>
    </div>
  );
}
