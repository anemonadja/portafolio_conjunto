import '../pages/Home.css';
import fotoperfil1 from '../../src/assets/img/fotoperfil11.jpg';

const Home = () => {


  return (
    <section className="container">
      <div className="about">
        <img className="about-foto1" src={fotoperfil1} alt="Foto de Nadja" />

        <div className="about-texto">
          <div className="about-titulos">
            <h2>EN CONSTRUCCIÓN</h2>
          </div>
          <div className="social-icons">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;