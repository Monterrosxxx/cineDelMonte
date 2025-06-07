import React, { useState } from "react";
import Home from "./components/Home";
import Bienvenida from "./pages/Bienvenida";
import { Toaster } from "react-hot-toast";

/**
 * Componente principal de la aplicación
 * Maneja la lógica de mostrar la pantalla de bienvenida o el home
 */
function App() {
  // Estado para controlar si se muestra la pantalla de bienvenida
  const [showWelcome, setShowWelcome] = useState(true);

  // Función para manejar el inicio de la aplicación
  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {/* Renderizado condicional entre Bienvenida y Home */}
      {showWelcome ? (
        <Bienvenida onStart={handleStart} />
      ) : (
        <Home />
      )}
      
      {/* Configuración del sistema de notificaciones toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;