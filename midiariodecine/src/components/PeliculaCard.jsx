const PeliculaCard = ({ movie, onEdit, onDelete, getStarRating }) => {
  return (
    <div className="movie-card">
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