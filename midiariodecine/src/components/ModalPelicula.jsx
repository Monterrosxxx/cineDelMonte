import InputPelicula from './InputPelicula';
import SelectGenero from './SelectGenero';

const ModalPelicula = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  register,
  errors, 
  editingMovie, 
  generos 
}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editingMovie);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingMovie ? 'Editar Película' : 'Agregar Nueva Película'}</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="movie-form">
          <InputPelicula
            name="pelicula"
            label="Título de la Película"
            placeholder="Ej: Avengers: Endgame"
            register={register}
            error={errors.pelicula}
          />

          <SelectGenero
            name="genero"
            label="Género"
            register={register}
            options={generos}
            error={errors.genero}
            placeholder="Selecciona un género"
          />

          <div className="form-row">
            <InputPelicula
              name="estreno"
              label="Año de Estreno"
              type="number"
              placeholder="2023"
              register={register}
              error={errors.estreno}
              min="1900"
              max="2030"
            />

            <InputPelicula
              name="calificacion"
              label="Tu Calificación (1-10)"
              type="number"
              placeholder="8"
              register={register}
              error={errors.calificacion}
              min="1"
              max="10"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancelar
            </button>
            <button type="submit" className="submit-btn">
              {editingMovie ? 'Actualizar' : 'Agregar'} Película
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPelicula;