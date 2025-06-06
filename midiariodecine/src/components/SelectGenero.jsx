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
      <label htmlFor={name}>{label} *</label>
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
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
};

export default SelectGenero;