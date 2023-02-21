import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Books</h1>} />
          <Route path="catagories" element={<h1>catagories</h1>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
