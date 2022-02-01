import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);


  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
