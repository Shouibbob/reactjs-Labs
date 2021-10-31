import React from "react";
import ReactPaginate from "react-paginate";
import "./Movie.css";
import { useState, useEffect } from "react";
import Url from "../../API/axiosConfig";
import MovieItem from "../../components/MovieItem/MovieItem";
import axios from "axios";

export default function Movies(props) {
  const [Movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=87fdc14c654f044bfc9f0477b4e21f55&query=";

  useEffect(() => {
    Url.get(`/movie/popular?api_key=87fdc14c654f044bfc9f0477b4e21f55&page`)
      .then((res) => res.data.results)
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);

  const movies = (currentPage) => {
    Url.get(
      `/movie/popular?api_key=87fdc14c654f044bfc9f0477b4e21f55&page=${currentPage}`
    )
      .then((res) => res.data.results)
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
    return Movie;
  };

  console.log(Movie);
  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    console.log(currentPage);
    const movieFromeServer = await movies(currentPage);
    setMovie(movieFromeServer);
  };

  const Search = (e) => {
    e.preventDefault();
    if (searchTerm) {
      axios
        .get(SEARCH_API + searchTerm)
        .then((res) => res.data.results)
        .then((res) => setMovie(res));

      setSearchTerm("");
    }
  };

  const hundleOnChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={Search}>
          <input
            className="search"
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={hundleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {Movie.map((movies) => {
          return (
            <MovieItem
              key={movies.id}
              img={movies.backdrop_path}
              title={movies.original_title}
              desc={movies.overview}
              vote={movies.vote_average}
            />
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center Co"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
