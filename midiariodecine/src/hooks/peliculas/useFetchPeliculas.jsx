import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useFetchPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://retoolapi.dev/vmJ8AL/peliculas';

  const getPeliculas = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Filtrar solo películas válidas con todos los campos requeridos
      const validPeliculas = data.filter(movie => 
        movie && 
        movie.pelicula && 
        movie.genero && 
        movie.estreno && 
        movie.calificacion
      );
      
      setPeliculas(validPeliculas);
    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Error al cargar las películas');
      setPeliculas([]); // Establecer array vacío en caso de error
    } finally {
      setLoading(false);
    }
  };

  const getPeliculaById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      toast.error("Error al cargar la película");
      return null;
    }
  };

  useEffect(() => {
    getPeliculas();
  }, []);

  return {
    peliculas,
    loading,
    getPeliculas,
    getPeliculaById
  };
};

export default useFetchPeliculas;