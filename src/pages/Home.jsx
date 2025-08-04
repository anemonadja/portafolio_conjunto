import anemonalogo from './../assets/anemonalogo.svg';

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="about">
        <img className="about-foto1" src={anemonalogo} alt="Una imagen de Nadja, dibujada."/>
        <div className="about-texto">
            <div className="about-titulos">
              <h2>
                <br />
                <span className="accent">Nadja</span> Villarroel Navarro
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fuga, sed possimus deserunt incidunt eius fugiat asperiores
              tempore, nesciunt corrupti eaque qui itaque hic. Ipsum qui porro
              quam reprehenderit facere.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;