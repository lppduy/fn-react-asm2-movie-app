import React from 'react';
import YouTube from 'react-youtube';

import './MovieDetail.css';

const base_url = 'https://image.tmdb.org/t/p/original';

// Cấu hình cho video YouTube
const opts = {
  height: '400',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

// Component MovieDetail
const MovieDetail = ({ movieTrailer, movieData, backdropImage }) => {
  // Destructuring các thuộc tính từ đối tượng movieData
  const { release_date, title, name, overview, vote_average } = movieData;

  return (
    <div className="movie_detail">
      <div className="movie_detail_data">
        <h1>{title || name}</h1>
        <hr></hr>

        <h3>Release Date: {release_date}</h3>
        <h3>Vote: {vote_average} / 10</h3>
        <br></br>
        <p>{overview}</p>
      </div>
      {movieTrailer ? (
        // Nếu có video Trailer hoặc Teaser, hiển thị video
        <div className="movie_detail_trailer">
          {/* Sử dụng thư viện react-youtube để hiển thị trailer */}
          <YouTube
            videoId={movieTrailer}
            opts={opts}
          />
        </div>
      ) : backdropImage ? (
        // Nếu không có video Trailer hoặc Teaser, nhưng có ảnh Backdrop, hiển thị ảnh Backdrop
        <div className="movie_detail_backdrop">
          <img
            src={`${base_url}${backdropImage}`} // Sử dụng backdropImage để tạo URL hình ảnh backdrop
            alt="Backdrop"
            className="backdrop-image"
          />
        </div>
      ) : (
        // Nếu không có cả video Trailer hoặc ảnh Backdrop thay thế
        <div className="movie_detail_no_content">
          <p>No Trailer or Backdrop Available</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
