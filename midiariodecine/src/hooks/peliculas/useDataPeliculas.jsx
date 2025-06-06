import { toast } from "react-hot-toast";
import { API_URL } from "../../utils/peliculasUtils";

const useDataPelicula = (methods, getPeliculas) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Función para guardar una nueva película
  const savePeliculaForm = async (dataForm) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      toast.success("Película agregada exitosamente");
      reset(); // Reiniciar el formulario después de enviar
      getPeliculas(); // Obtener la lista actualizada de películas
    } catch (error) {
      console.error("Error al guardar película:", error);
      toast.error("Error al guardar la película");
    }
  };

  // Función para editar una película existente
  const editPelicula = async (dataForm, movieId) => {
    try {
      const response = await fetch(`${API_URL}/${movieId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      toast.success("Película actualizada exitosamente");
      reset(); // Reiniciar el formulario después de enviar
      getPeliculas(); // Refrescar la lista después de actualizar
    } catch (error) {
      console.error("Error al actualizar película:", error);
      toast.error("Error al actualizar la película");
    }
  };

  // Función principal que decide si guardar o editar
  const handlePeliculaAction = (dataForm, editingMovie = null) => {
    // Convertir strings a números para estreno y calificacion
    const processedData = {
      ...dataForm,
      estreno: parseInt(dataForm.estreno),
      calificacion: parseInt(dataForm.calificacion)
    };

    if (editingMovie && editingMovie.id) {
      editPelicula(processedData, editingMovie.id);
    } else {
      savePeliculaForm(processedData);
    }
  };

  // Función para cargar datos de una película en el formulario (para edición)
  const loadPeliculaData = (movie) => {
    if (movie) {
      reset({
        pelicula: movie.pelicula,
        genero: movie.genero,
        estreno: movie.estreno.toString(),
        calificacion: movie.calificacion.toString(),
      });
    } else {
      reset({
        pelicula: '',
        genero: '',
        estreno: '',
        calificacion: ''
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    loadPeliculaData,
    handlePeliculaAction,
  };
};

export default useDataPelicula;