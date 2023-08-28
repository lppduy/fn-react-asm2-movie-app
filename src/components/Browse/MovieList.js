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
  const [backdrop, setBackdrop] = useState('');

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
      setBackdrop(''); // Đặt backdrop về trống khi không có phim nào được chọn
    } else {
      setSelectedMovie(movie);
      console.log(movie);
      setBackdrop(movie['backdrop_path']); // Đặt backdrop khi có phim được chọn
      console.log('backdrop', backdrop);
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
            backdropImage={backdrop}
          />
        )}
      </div>
    </div>
  );
};

export default MovieList;
