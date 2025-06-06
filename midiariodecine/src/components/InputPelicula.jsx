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
      <label htmlFor={name}>{label} *</label>
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
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
};

export default InputPelicula;