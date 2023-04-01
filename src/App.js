import './App.css';
import Nav from './components/Navigationbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="container App">
      <Nav />
      <Books />
      <Categories />
    </div>
  );
}

export default App;
