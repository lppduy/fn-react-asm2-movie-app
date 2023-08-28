import React, { useEffect, useState } from 'react';
import { fetchData, requests } from '../../api';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        // Gửi yêu cầu API để lấy danh sách bộ phim Netflix Originals
        const request = await fetchData(requests['fetchNetflixOriginals']);

        // Lấy một bộ phim ngẫu nhiên từ danh sách
        const randomMovie =
          request.data.results[Math.floor(Math.random() * request.data.results.length)];

        // Set thông tin bộ phim vào state
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataFromApi();
  }, []);

  // Hàm cắt mô tả nếu quá dài
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
