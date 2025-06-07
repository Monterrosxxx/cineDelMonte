/**
 * Componente de input reutilizable para el formulario de películas
 * @param {string} name - Nombre/identificador del campo
 * @param {string} label - Etiqueta que se mostrará
 * @param {string} placeholder - Texto de ayuda dentro del input
 * @param {string} type - Tipo de input (text, number, etc)
 * @param {function} register - Función de registro de react-hook-form
 * @param {object} error - Objeto de error del campo
 * @param {number} min - Valor mínimo permitido (para inputs numéricos)
 * @param {number} max - Valor máximo permitido (para inputs numéricos)
 */
const InputPelicula = ({ 
  name, 
  label, 
  placeholder, 
  type = "text", 
  register,
  error,
  min,
  max 
}) => {
  return (
    <div className="form-group">
      {/* Label del input */}
      <label htmlFor={name}>{label} *</label>
      
      {/* Input con validaciones */}
      <input
        id={name}
        {...register(name, { 
          required: `${label} es requerido`,
          min: min ? { value: min, message: `El valor mínimo es ${min}` } : undefined,
          max: max ? { value: max, message: `El valor máximo es ${max}` } : undefined
        })}
        placeholder={placeholder}
        type={type}
        className={error ? 'error' : ''}
        min={min}
        max={max}
      />
      
      {/* Mensaje de error si existe */}
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
};

export default InputPelicula;