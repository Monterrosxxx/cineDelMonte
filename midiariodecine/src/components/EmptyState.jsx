const EmptyState = ({ onAddMovie }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">🎭</div>
      <h3>No hay películas</h3>
      <p>Comienza agregando tu primera película al diario</p>
      <button onClick={onAddMovie} className="add-button">
        Agregar Primera Película
      </button>
    </div>
  );
};

export default EmptyState;