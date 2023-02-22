import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './compoents/Layout';
import Book from './compoents/Book';
import Categories from './compoents/Categories';

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
