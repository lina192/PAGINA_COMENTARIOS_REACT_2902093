import { React, useState } from 'react';
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {
    const [comments, setComments] = useState(Comentarios);

    const borrarItem = (id) => {
        if (window.confirm("¿Está seguro de borrar el comentario?")) {
            setComments(comments.filter((c) => c.id !== id));
        }
    };

    const titulo = "App de Comentarios";
    const Autor = "Cristian Buitrago";
    const ficha = "2902093";
    const formacion = "Centro de formación SENA";

    const loading = false; // Set this to true if fetching data
    if (loading) return (<h1>Cargando comentarios...</h1>);

    
    const addComentario = (newComentario) => {
      const id = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
      const comentarioConId = { id, ...newComentario };
      setComments([...comments, comentarioConId]);
  };



    return (
        <div className='container'>
            <Header titulo={titulo} autor={Autor} ficha={ficha} formacion={formacion} />
            <ComentarioForm handleAdd={addComentario} />
            <ComentarioStats comentarios={comments} />
            <ComentarioLista comments={comments} handleDelete={borrarItem} />

        </div>
    );
}

export default App;
