/**
 * Componente que representa una tarjeta de película individual
 * @param {object} movie - Datos de la película a mostrar
 * @param {function} onEdit - Función para editar la película 
 * @param {function} onDelete - Función para eliminar la película
 * @param {function} getStarRating - Función que convierte calificación numérica a estrellas
 */
const PeliculaCard = ({ movie, onEdit, onDelete, getStarRating }) => {
  return (
    <div className="movie-card">
      {/* Encabezado con título y acciones */}
      <div className="movie-header">
        <h3 className="movie-title">{movie.pelicula}</h3>
        <div className="movie-actions">
          <button 
            onClick={() => onEdit(movie)}
            className="edit-btn"
            title="Editar"
          >
            ✏️
          </button>
          <button 
            onClick={() => onDelete(movie.id)}
            className="delete-btn"
            title="Eliminar"
          >
            🗑️
          </button>
        </div>
      </div>
      
      {/* Detalles de la película */}
      <div className="movie-details">
        <div className="movie-genre">
          <span className="genre-tag">{movie.genero}</span>
        </div>
        <div className="movie-year">📅 {movie.estreno}</div>
        <div className="movie-rating">
          <span className="stars">{getStarRating(movie.calificacion)}</span>
          <span className="rating-number">{movie.calificacion}/10</span>
        </div>
      </div>
    </div>
  );
};

export default PeliculaCard;