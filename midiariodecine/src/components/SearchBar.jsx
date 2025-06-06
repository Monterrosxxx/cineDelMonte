const SearchBar = ({ searchTerm, setSearchTerm, filterGenre, setFilterGenre, generos }) => {
  return (
    <div className="search-filters">
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