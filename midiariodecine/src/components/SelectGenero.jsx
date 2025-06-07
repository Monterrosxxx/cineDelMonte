/**
 * Componente de selección de género para películas
 * @param {string} name - Nombre/identificador del campo
 * @param {string} label - Etiqueta que se mostrará 
 * @param {function} register - Función de registro de react-hook-form
 * @param {array} options - Lista de opciones disponibles
 * @param {object} error - Objeto de error del campo
 * @param {string} placeholder - Texto por defecto del selector
 */
const SelectGenero = ({ 
  name, 
  label, 
  register,
  options, 
  error,
  placeholder = "Selecciona una opción" 
}) => {
  return (
    <div className="form-group">
      {/* Label del select */}
      <label htmlFor={name}>{label} *</label>

      {/* Select con validación */}  
      <select
        id={name}
        {...register(name, { required: `${label} es requerido` })}
        className={error ? 'error' : ''}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      {/* Mensaje de error si existe */}
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
};

export default SelectGenero;