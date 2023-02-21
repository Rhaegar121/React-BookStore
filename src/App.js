import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import Navbar from './compoents/Navbar';
import Book from './compoents/Book';
import Categories from './compoents/Categories';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Book title="book1" author="Barry" />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
