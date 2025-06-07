/**
 * Componente que muestra un indicador de carga
 * @param {string} message - Mensaje a mostrar durante la carga (opcional)
 * @returns {JSX.Element} Componente de carga
 */
const Loading = ({ message = "Cargando películas..." }) => {
  return (
    <div className="loading">
      {/* Animación de carga */}
      <div className="spinner"></div>
      {/* Mensaje de carga */}
      <p>{message}</p>
    </div>
  );
};

export default Loading;