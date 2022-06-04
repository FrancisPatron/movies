import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
