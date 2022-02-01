import React from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import requests from "../Requests";
import Row from "./Row/Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Navbar />

      {/* banner */}

      <Banner />

      {/* rows */}

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        
      />
      <Row
        title="Popular"
        fetchUrl={requests.fetchPopular}
        
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        
      />
    </div>
  );
};

export default HomeScreen;
