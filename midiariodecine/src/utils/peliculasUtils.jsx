//URL de la API
export const API_URL = 'https://retoolapi.dev/vmJ8AL/peliculas';

// Géneros disponibles
export const GENEROS = [
  'Accion', 
  'Drama', 
  'Comedia', 
  'Terror', 
  'Ciencia Ficcion', 
  'Romance', 
  'Thriller', 
  'Animacion', 
  'Documental', 
  'Musical'
];

// Función para obtener calificación en estrellas
export const getStarRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('★');
  }
  if (hasHalfStar) {
    stars.push('☆');
  }
  while (stars.length < 5) {
    stars.push('☆');
  }
  
  return stars.join('');
};

// Filtrar películas
export const filterMovies = (movies, searchTerm, filterGenre) => {
  return movies.filter(movie => {
    // Validar que movie y movie.pelicula existan
    if (!movie || !movie.pelicula) return false;
    
    const matchesSearch = movie.pelicula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filterGenre === '' || movie.genero === filterGenre;
    return matchesSearch && matchesGenre;
  });
};