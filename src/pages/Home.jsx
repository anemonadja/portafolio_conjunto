import React from 'react';
import '../pages/Home.css'
import fotoperfil1 from '../../src/assets/img/fotoperfil5.jpg';

const Home = () => {
  
  
  
  
  return (

      <section className="container">
        <div className="about">
          <img className="about-foto1" src={fotoperfil1} alt="Una imagen de Nadja, dibujada."/>
          <div className="about-texto">
            <div className="about-titulos">
              <h2><span className="accent">NADJA</span> VILLARROEL NAVARRO</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fuga, sed possimus deserunt incidunt eius fugiat asperiores
              tempore, nesciunt corrupti eaque qui itaque hic. Ipsum qui porro
              quam reprehenderit facere.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Home;