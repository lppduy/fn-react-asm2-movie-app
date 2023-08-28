import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import MovieDetail from './MovieDetail';
import './MovieList.css';

const base_url = 'https://image.tmdb.org/t/p/original';
const movies_limit = 10;

// Component MovieList hiển thị danh sách phim và chi tiết phim khi chọn
const MovieList = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Sử dụng useEffect để gọi API và lấy danh sách phim
  useEffect(() => {
    // Hàm fetchDataMovieList dùng để gọi API và cập nhật state
    const fetchDataMovieList = async () => {
      try {
        const request = await fetchData(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // Gọi hàm fetchDataMovieList khi fetchUrl thay đổi
    fetchDataMovieList();
  }, [fetchUrl]);

  // Xử lý sự kiện khi click vào một phim
  const handleClick = movie => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
      setTrailerUrl('');
    } else {
      setSelectedMovie(movie);
      movieTrailer(movie?.title || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(error => console.log(error));
    }
  };

  // Sắp xếp danh sách phim theo độ phổ biến
  movies.sort((a, b) => b.popularity - a.popularity);
  movies.splice(movies_limit);

  return (
    <div className="row">
      <h2 className="movie-list-title">{title}</h2>
      <div className="row_posters sc2">
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {selectedMovie && (
          <MovieDetail
            movieData={selectedMovie}
            movieTrailer={trailerUrl}
          />
        )}
      </div>
    </div>
  );
};

export default MovieList;
