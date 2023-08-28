import './Browse.css';

import React from 'react';
import Navbar from '../../components/Browse/Navbar';
import Banner from '../../components/Browse/Banner';
import MovieList from '../../components/Browse/MovieList';
import { requests } from '../../api';

const Browse = () => {
  return (
    <div className="app">
      {/* <h1>Browse</h1> */}
      <Navbar />
      <Banner />
      <MovieList
        title=""
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
