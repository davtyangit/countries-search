import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import { Blog } from './pages/Blog/Blog'
import './App.css';

function App() {
  return (
    <div className='contianer'>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Blog />} path='/blog/:id' />
      </Routes>
    </div>
  );
}

export default App;
