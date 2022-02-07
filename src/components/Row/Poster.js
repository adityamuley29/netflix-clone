import React, { useState } from "react";


const Poster = ({ movie, baseImageUrl, isLargeRow }) => {
  const [isHover, setIsHover] = useState(false);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className={`poster_img ${isLargeRow && "poster_imgLarger"} ` }
        key={movie.id}
        src={`${baseImageUrl}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie?.name}
      />
      {isHover ? (
        <div className="movie_info">
          <h4>
            {truncate(
              `${movie?.title || movie?.name || movie?.original_name}`,
              20
            )}
          </h4>
          <span className="movie_rating">⭐ {movie.vote_average}/10</span>
          <div className="movie-fadeBottom" />
        </div>
      ) : ('')}
      
    </div>
  );
};

export default Poster;
