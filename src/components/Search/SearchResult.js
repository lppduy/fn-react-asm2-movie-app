import React, { useState, useEffect } from 'react';
import { fetchData, requests } from '../../api';
import './SearchResult.css';

// Đường dẫn cơ sở cho hình ảnh phim từ TMDb
const base_url = 'https://image.tmdb.org/t/p/original';

const SearchResult = ({ query }) => {
  // Sử dụng hooks useState để lưu trữ danh sách phim
  const [movies, setMovies] = useState([]);

  // Xây dựng URL cho yêu cầu tìm kiếm phim
  const url = `${requests.fetchSearch(query)}`;

  // Sử dụng hooks useEffect để gọi API khi truy vấn thay đổi
  useEffect(() => {
    async function fetchSearchResult() {
      try {
        // Gọi API và lưu trữ kết quả trong state
        const response = await fetchData(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }

    // Kiểm tra xem truy vấn có giá trị không
    if (query) {
      // Gọi hàm fetchSearchResult nếu có truy vấn
      fetchSearchResult();
    } else {
      // Nếu không có truy vấn, đặt danh sách phim thành rỗng
      setMovies([]);
    }
  }, [url, query]);

  return (
    <div className="row">
      <h2>Search Result</h2>
      <div className="row_posters search-resul-container sc2">
        {movies.map(movie => (
          // Hiển thị danh sách phim dưới dạng hình ảnh
          <img
            key={movie.id}
            className="row_poster row_posterLarge"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
