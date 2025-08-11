import '../pages/Home.css';
import fotoperfil1 from '../../src/assets/img/fotoperfil13.jpg';

const Home = () => {


  return (
    <section className="container">
        <img className="about-foto1" src={fotoperfil1} alt="Foto de Nadja" />
        <div className="about-texto">
          <h2>EN CONSTRUCCIÓN</h2>
        </div>
    </section>
  );
};

export default Home;