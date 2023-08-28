import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Sử dụng Hook useState để theo dõi trạng thái của NavBar (show/hide)
  const [show, setShow] = useState(false);

  // Sử dụng Hook useEffect để thêm/xóa sự kiện scroll khi component được gắn/diệt
  useEffect(() => {
    // Hàm xử lý sự kiện scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Thêm sự kiện scroll vào window khi component được gắn
    window.addEventListener('scroll', handleScroll);

    // Xóa sự kiện scroll khi component bị diệt
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Xác định className dựa trên giá trị của 'show'
  const navClassName = show ? 'nav nav_black' : 'nav';

  return (
    <div className={navClassName}>
      <a
        href="/"
        className="nav-title"
      >
        {/* Thay thế bằng hình ảnh của bạn hoặc văn bản */}
        {/* <img className='nav_logo' src='đường-dẫn-đến-hình-ảnh-của-bạn.png' alt='Netflix Logo' /> */}
        <p>Movie App</p>
      </a>
      <a href="/search">
        <div className="icon-wrap-nav nav_avatar">
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill={show ? '#000' : '#ccc'}
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Navbar;