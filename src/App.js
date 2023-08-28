import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse/Browse';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Browse />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
