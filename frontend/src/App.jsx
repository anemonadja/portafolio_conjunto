import { useEffect, useState } from 'react';

function App() {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/perfil')
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta');
        return res.json();
      })
      .then(data => {
        setPerfil(data.perfil); // ⚠️ accede a perfil dentro del JSON
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener perfil:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando perfil...</div>;
  if (!perfil) return <div>Error al cargar perfil.</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{perfil.intro.nombre}</h1>
      <p>Edad: {perfil.intro.edad}</p>
      <p>Ciudad: {perfil.direccion.ciudad}</p>
      <p>
        LinkedIn: <a href={perfil.redes.linkedin} target="_blank" rel="noreferrer">{perfil.redes.linkedin}</a>
      </p>
      <p>
        GitHub: <a href={perfil.redes.github} target="_blank" rel="noreferrer">{perfil.redes.github}</a>
      </p>
      <p>
        Behance: <a href={perfil.redes.behance} target="_blank" rel="noreferrer">{perfil.redes.behance}</a>
      </p>
    </div>
  );
}

export default App;