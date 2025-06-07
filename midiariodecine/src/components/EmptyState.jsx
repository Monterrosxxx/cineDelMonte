/**
 * Componente que muestra un estado vacío cuando no hay películas
 * @param {function} onAddMovie - Función que maneja el evento de agregar película
 * @returns {JSX.Element} Componente de estado vacío
 */
const EmptyState = ({ onAddMovie }) => {
  return (
    <div className="empty-state">
      {/* Ícono representativo */}
      <div className="empty-icon">🎭</div>
      {/* Título del estado vacío */}
      <h3>No hay películas</h3>
      {/* Mensaje descriptivo */}
      <p>Comienza agregando tu primera película al diario</p>
      {/* Botón de acción */}
      <button onClick={onAddMovie} className="add-button">
        Agregar Primera Película
      </button>
    </div>
  );
};

export default EmptyState;