import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Proyectos from './pages/Proyectos';
import Galeria from './pages/Galeria';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      
    </>
  );
}

export default App 