import { toast } from "react-hot-toast";

/**
 * Custom hook para manejar las acciones CRUD de películas
 * @param {function} getPeliculas - Función para refrescar la lista de películas
 * @returns {Object} Objeto con funciones para guardar, actualizar y eliminar películas
 */
const usePeliculaActions = (getPeliculas) => {
  const API_URL = 'https://retoolapi.dev/vmJ8AL/peliculas';

  // Guardar nueva película
  const savePelicula = async (peliculaData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(peliculaData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save movie');
      }
      
      toast.success('Película agregada exitosamente');
      getPeliculas(); // Refrescar la lista
      return true;
    } catch (error) {
      console.error('Error saving movie:', error);
      toast.error('Error al guardar la película');
      return false;
    }
  };

  // Actualizar película existente
  const updatePelicula = async (id, peliculaData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(peliculaData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update movie');
      }
      
      toast.success('Película actualizada exitosamente');
      getPeliculas(); // Refrescar la lista
      return true;
    } catch (error) {
      console.error('Error updating movie:', error);
      toast.error('Error al actualizar la película');
      return false;
    }
  };

  // Eliminar película
  const deletePelicula = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { 
        method: 'DELETE' 
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }
      
      toast.success('Película eliminada exitosamente');
      getPeliculas(); // Refrescar la lista
      return true;
    } catch (error) {
      console.error('Error deleting movie:', error);
      toast.error('Error al eliminar la película');
      return false;
    }
  };

  return {
    savePelicula,
    updatePelicula,
    deletePelicula
  };
};

export default usePeliculaActions;