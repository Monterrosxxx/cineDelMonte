/**
 * Componente de barra de búsqueda y filtro de películas
 * @param {string} searchTerm - Término de búsqueda actual
 * @param {function} setSearchTerm - Función para actualizar el término de búsqueda
 * @param {string} filterGenre - Género seleccionado para filtrar
 * @param {function} setFilterGenre - Función para actualizar el filtro de género
 * @param {array} generos - Lista de géneros disponibles
 */
const SearchBar = ({ searchTerm, setSearchTerm, filterGenre, setFilterGenre, generos }) => {
  return (
    <div className="search-filters">
      {/* Caja de búsqueda */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      
      {/* Selector de filtro por género */}
      <select
        value={filterGenre}
        onChange={(e) => setFilterGenre(e.target.value)}
        className="filter-select"
      >
        <option value="">Todos los géneros</option>
        {generos.map(genero => (
          <option key={genero} value={genero}>{genero}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;