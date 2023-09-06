import Slide from './pages/Home-Carousel';
import React from 'react';
import Nav from './pages/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from './pages/Sobre';
import Skill from './pages/Skill';
import Projetos from './pages/Projetos';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Slide />
      <Sobre />
      <Skill />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
