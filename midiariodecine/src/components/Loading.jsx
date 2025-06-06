const Loading = ({ message = "Cargando películas..." }) => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loading;