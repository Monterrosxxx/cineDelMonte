import React, { useState } from "react";
import Home from "./components/Home";
import Bienvenida from "./pages/Bienvenida";
import { Toaster } from "react-hot-toast";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <Bienvenida onStart={handleStart} />
      ) : (
        <Home />
      )}
      
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