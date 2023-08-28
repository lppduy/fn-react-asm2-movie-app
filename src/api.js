import axios from 'axios';

const API_KEY = '9c077705bb9d788c3dc177a9316f01c5';

// Tạo một phiên bản Axios với baseURL là địa chỉ cơ sở của API TMDb
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// Định nghĩa các yêu cầu API dưới dạng các đối tượng thuộc tính
export const requests = {
  // Yêu cầu dữ liệu phim nổi bật trong tuần
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  // Yêu cầu dữ liệu các bộ phim của Netflix
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,

  // Yêu cầu dữ liệu các bộ phim có đánh giá cao nhất
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  // Yêu cầu dữ liệu các bộ phim hành động
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  // Yêu cầu dữ liệu các bộ phim hài kịch
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  // Yêu cầu dữ liệu các bộ phim kinh dị
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  // Yêu cầu dữ liệu các bộ phim lãng mạn
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  // Yêu cầu dữ liệu các bộ phim tài liệu
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  // Yêu cầu dữ liệu tìm kiếm phim dựa trên một truy vấn
  fetchSearch: query => `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`,
};

// Hàm fetchData dùng để gửi yêu cầu API và nhận dữ liệu từ phản hồi
export const fetchData = async request => {
  try {
    // Gửi yêu cầu API bằng Axios và nhận phản hồi
    const response = await instance.get(request);

    // Trả về dữ liệu từ phản hồi
    return response;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
  }
};
