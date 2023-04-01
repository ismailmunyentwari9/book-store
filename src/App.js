import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigationbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="container App">
      <Nav />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
