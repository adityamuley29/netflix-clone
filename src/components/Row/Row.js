import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Poster from "./Poster";

import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        

        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <Poster movie={movie} baseImageUrl={baseImageUrl} isLargeRow={isLargeRow} />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
