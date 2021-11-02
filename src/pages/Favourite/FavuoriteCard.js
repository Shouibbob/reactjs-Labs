import React from "react";
import { useSelector } from "react-redux";

function FavuoriteCard() {
  const IMG_API = "https://image.tmdb.org/t/p/w500/";
  const addFav = useSelector((state) => state.Fav);
  console.log(addFav);
  return (
    <div className="movie-container">
      {addFav.map((Favuoirte) => {
        return (
          <div className="movie">
            <img src={`${IMG_API}${Favuoirte.backdrop_path}`} alt="..." />
            <div className="movie-info">
              <h5>{Favuoirte.title}</h5>
              <span className="badge badge-default">
                {Favuoirte.vote_average}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FavuoriteCard;
