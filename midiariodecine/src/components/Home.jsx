import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../styles/Home.css";

// Importar componentes
import SearchBar from './SearchBar';
import PeliculaCard from './PeliculaCard';
import ModalPelicula from './ModalPelicula';
import Loading from './Loading';
import EmptyState from './EmptyState';

// Importar hooks
import useFetchPeliculas from '../hooks/peliculas/useFetchPeliculas';
import usePeliculaActions from '../hooks/peliculas/usePeliculaActions';
import useDataPelicula from '../hooks/peliculas/useDataPeliculas';

// Importar utilidades
import { GENEROS, getStarRating, filterMovies } from '../utils/peliculasUtils';

const Home = () => {
  // Estados locales para UI
  const [showModal, setShowModal] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  // React Hook Form
  const methods = useForm();

  // Custom hooks
  const { peliculas, loading, getPeliculas } = useFetchPeliculas();
  const { deletePelicula } = usePeliculaActions(getPeliculas);
  const { register, handleSubmit, errors, loadPeliculaData, handlePeliculaAction } = useDataPelicula(methods, getPeliculas);

  // Filtrar películas
  const filteredPeliculas = filterMovies(peliculas, searchTerm, filterGenre);

  // Funciones para manejar el modal
  const openModal = (movie = null) => {
    setEditingMovie(movie);
    loadPeliculaData(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingMovie(null);
    loadPeliculaData(null); // Limpiar el formulario
  };

  // Función que se ejecuta cuando se envía el formulario
  const onSubmitForm = (data) => {
    handlePeliculaAction(data, editingMovie);
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta película?')) {
      await deletePelicula(id);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="title">
            🎬 Mi Diario de Cine
          </h1>
          <p className="subtitle">Tu colección personal de películas y reseñas</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="controls">
            <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterGenre={filterGenre}
              setFilterGenre={setFilterGenre}
              generos={GENEROS}
            />
            
            <button 
              onClick={() => openModal()}
              className="add-button"
            >
              + Agregar Película
            </button>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="movies-grid">
              {filteredPeliculas.length === 0 ? (
                <EmptyState onAddMovie={() => openModal()} />
              ) : (
                filteredPeliculas.map(movie => {
                  // Validar que la película tenga todos los campos necesarios
                  if (!movie || !movie.pelicula || !movie.genero || !movie.estreno || !movie.calificacion) {
                    return null;
                  }
                  
                  return (
                    <PeliculaCard
                      key={movie.id}
                      movie={movie}
                      onEdit={openModal}
                      onDelete={handleDelete}
                      getStarRating={getStarRating}
                    />
                  );
                }).filter(Boolean) // Filtrar elementos null
              )}
            </div>
          )}
        </div>
      </main>

      <ModalPelicula
        isOpen={showModal}
        onClose={closeModal}
        onSubmit={handleSubmit(onSubmitForm)}
        register={register}
        errors={errors}
        editingMovie={editingMovie}
        generos={GENEROS}
      />
    </div>
  );
};

export default Home;