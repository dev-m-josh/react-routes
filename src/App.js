
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import NewBook from './pages/NewBook';

function App() {
  return (
  <>
  <nav>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/books'}>Books</Link></li>
    </ul>
  </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books'>
        <Route index element={<BookList/>}/>
        <Route path=':id' element= {<Book/>}/>
        <Route path='/books/new' element={<NewBook/>}/>
      </Route>
      <Route path= '*' element= {<NotFound/>}/>
    </Routes>
  </>
  );
}

export default App;
