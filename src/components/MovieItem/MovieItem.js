import React from "react";
import "./MovieItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSt, faStar } from "@fortawesome/free-solid-svg-icons";
//import { Link, useHistory } from "react-router-dom";

export default function MovieItem(props) {
  const FavouriteComponent = props.favourit;
  const removFav = props.removeFav;
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
        <span className="badge badge-default">{props.vote}</span>
      </div>
      <div onClick={props.hundlefavuoriteClick} className="movie-over">
        <FavouriteComponent />
        <span onClick={props.handleremove}>
          <removFav />
        </span>
      </div>
    </div>
  );
}
