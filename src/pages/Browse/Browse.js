import './Browse.css';

import React from 'react';
import { requests } from '../../api';
import Banner from '../../components/Browse/Banner';
import MovieList from '../../components/Browse/MovieList';
import NavBar from '../../components/Browse/NavBar';

const Browse = () => {
  return (
    <div className="app">
      {/* <h1>Browse</h1> */}
      <NavBar />
      <Banner />
      <MovieList
        title="Original"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieList
        title="Xu hướng"
        fetchUrl={requests.fetchTrending}
      />
      <MovieList
        title="Xếp hạng cao"
        fetchUrl={requests.fetchTopRated}
      />
      <MovieList
        title="Hành động"
        fetchUrl={requests.fetchActionMovies}
      />
      <MovieList
        title="Hài"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MovieList
        title="Kinh dị"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <MovieList
        title="Lãng mạn"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieList
        title="Tài liệu"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default Browse;
