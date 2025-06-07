import InputPelicula from './InputPelicula';
import SelectGenero from './SelectGenero';

/**
 * Componente modal para agregar o editar películas
 * @param {boolean} isOpen - Controla si el modal está visible
 * @param {function} onClose - Función para cerrar el modal
 * @param {function} onSubmit - Función que maneja el envío del formulario
 * @param {function} register - Función de registro de react-hook-form
 * @param {object} errors - Objeto con errores de validación
 * @param {object} editingMovie - Película que se está editando (si existe)
 * @param {array} generos - Lista de géneros disponibles
 */
const ModalPelicula = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  register,
  errors, 
  editingMovie, 
  generos 
}) => {
  
  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editingMovie);
  };

  // No renderiza nada si el modal está cerrado
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Container del modal con prevención de cierre al hacer click dentro */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera del modal */}
        <div className="modal-header">
          <h2>{editingMovie ? 'Editar Película' : 'Agregar Nueva Película'}</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        
        {/* Formulario de película */}
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

          {/* Campos numéricos en fila */}
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

          {/* Botones de acción */}
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