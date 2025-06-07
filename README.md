<div align="center"><h1>Mi Diario de Cine 🎬</h1><p><em>"Tu colección personal de películas y reseñas"</em></p></div>

<hr>

<h2>🌟 ¿Qué es Mi Diario de Cine?</h2>

**Mi Diario de Cine** es una aplicación web moderna y elegante que permite a los amantes del cine gestionar su propia colección personal de películas. Con una interfaz intuitiva y funcionalidades completas de CRUD, puedes agregar, editar, eliminar y buscar películas mientras llevas un registro detallado de tus calificaciones y géneros favoritos.

<em>"No solo veas películas, vive la experiencia cinematográfica"</em>

<hr>

<h2>✨ Características principales</h2>

<ul>
  <li><strong>🎭 Gestión completa de películas:</strong> Agrega, edita, elimina y visualiza tu colección</li>
  <li><strong>🔍 Búsqueda inteligente:</strong> Encuentra películas por título en tiempo real</li>
  <li><strong>🎨 Filtros por género:</strong> Organiza tu colección por categorías cinematográficas</li>
  <li><strong>⭐ Sistema de calificaciones:</strong> Califica tus películas del 1 al 10 con visualización de estrellas</li>
  <li><strong>📱 Diseño responsivo:</strong> Perfecta experiencia en desktop, tablet y móvil</li>
  <li><strong>🎪 Interfaz moderna:</strong> Diseño con glassmorphism y animaciones suaves</li>
  <li><strong>🔔 Notificaciones:</strong> Feedback instantáneo con toast notifications</li>
  <li><strong>✅ Validación robusta:</strong> Formularios validados con React Hook Form</li>
</ul>

<hr>

<h2>🛠️ Tecnologías utilizadas</h2>

Mi Diario de Cine está construido con tecnologías modernas de React, enfocándose en mejores prácticas y una arquitectura escalable.

<div align="center">
<img src="https://d2jdgazzki9vjm.cloudfront.net/tutorial/reactjs/images/reactjs-tutorial.png" alt="React.js" width="120" height="100">&ensp;
<img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" alt="Vite" width="120" height="100">&ensp;
<img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" alt="React Hook Form" width="120" height="100">
</div>

<br>

### 📦 Dependencias principales

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hook-form": "^7.56.4",
  "react-hot-toast": "^2.5.2"
}
```

<ul>
   <li><strong>React 19</strong> - Librería principal para la construcción de la interfaz de usuario con las últimas características y optimizaciones</li>
   <li><strong>React Hook Form</strong> - Librería performante para el manejo de formularios con validación mínima de re-renders</li>
   <li><strong>React Hot Toast</strong> - Sistema de notificaciones elegante y customizable</li>
   <li><strong>Vite</strong> - Build tool moderno para desarrollo rápido y optimizado</li>
</ul>

<hr>

<h2>🏗️ Arquitectura del proyecto</h2>

El proyecto sigue una arquitectura modular basada en custom hooks y componentes reutilizables:

```
src/
├── components/              # Componentes reutilizables
│   ├── Home.jsx            # Componente principal
│   ├── Home.css            # Estilos principales
│   ├── PeliculaCard.jsx    # Tarjeta de película
│   ├── ModalPelicula.jsx   # Modal para formularios
│   ├── SearchBar.jsx       # Barra de búsqueda y filtros
│   ├── InputPelicula.jsx   # Input personalizado con RHF
│   ├── SelectGenero.jsx    # Select personalizado con RHF
│   ├── Loading.jsx         # Componente de carga
│   └── EmptyState.jsx      # Estado vacío
├── hooks/                  # Custom hooks para lógica de negocio
│   └── peliculas/
│       ├── useFetchPeliculas.jsx    # Hook para cargar datos
│       ├── usePeliculaActions.jsx   # Hook para acciones CRUD
│       └── useDataPelicula.jsx      # Hook para formularios
├── utils/                  # Utilidades y constantes
│   └── peliculasUtils.jsx  # Funciones helper y constantes
└── App.jsx                 # Componente raíz
```

<hr>

<h2>🔧 Funcionalidades técnicas</h2>

### 🎯 Custom Hooks

<div style="background-color: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; margin: 15px 0;">
  <p><strong>📝 useDataPelicula:</strong></p>
  <p>Hook principal que maneja toda la lógica de formularios utilizando React Hook Form. Gestiona validaciones, envío de datos y integración con la API.</p>
  
  <ul style="margin-top: 10px;">
    <li><strong>🎯 Validación automática:</strong> Reglas de validación integradas</li>
    <li><strong>🔄 Manejo de estados:</strong> Loading, errores y éxito</li>
    <li><strong>📤 Envío optimizado:</strong> Manejo asíncrono de requests</li>
    <li><strong>🧹 Reset automático:</strong> Limpieza de formularios tras operaciones</li>
  </ul>
</div>

<div style="background-color: #f0f8f0; border-left: 4px solid #28a745; padding: 15px; margin: 15px 0;">
  <p><strong>📊 useFetchPeliculas:</strong></p>
  <p>Hook dedicado exclusivamente a la obtención y gestión de datos desde la API. Implementa estados de carga y manejo de errores.</p>
  
  <ul style="margin-top: 10px;">
    <li><strong>⚡ Carga inicial:</strong> useEffect optimizado</li>
    <li><strong>🛡️ Filtrado de datos:</strong> Validación de películas válidas</li>
    <li><strong>🔄 Refetch automático:</strong> Actualización tras modificaciones</li>
    <li><strong>💾 Estado persistente:</strong> Gestión centralizada de películas</li>
  </ul>
</div>

<div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0;">
  <p><strong>⚡ usePeliculaActions:</strong></p>
  <p>Hook que encapsula todas las operaciones CRUD de la aplicación con manejo robusto de errores y feedback al usuario.</p>
  
  <ul style="margin-top: 10px;">
    <li><strong>➕ Crear películas:</strong> POST requests con validación</li>
    <li><strong>✏️ Actualizar datos:</strong> PUT requests optimizados</li>
    <li><strong>🗑️ Eliminar registros:</strong> DELETE con confirmación</li>
    <li><strong>🎯 Feedback inmediato:</strong> Toast notifications integradas</li>
  </ul>
</div>

### 📋 React Hook Form Integration

<div style="background-color: #e8f4f8; border-left: 4px solid #17a2b8; padding: 15px; margin: 15px 0;">
  <p><strong>🎭 Validación de formularios:</strong></p>
  
  ```jsx
  // Ejemplo de validación en InputPelicula
  <input
    {...register(name, { 
      required: `${label} es requerido`,
      min: min ? { value: min, message: `El valor mínimo es ${min}` } : undefined,
      max: max ? { value: max, message: `El valor máximo es ${max}` } : undefined
    })}
  />
  ```
  
  <ul style="margin-top: 10px;">
    <li><strong>🔍 Validación en tiempo real:</strong> Feedback inmediato al usuario</li>
    <li><strong>📝 Reglas personalizadas:</strong> Validaciones específicas por campo</li>
    <li><strong>💬 Mensajes claros:</strong> Errores descriptivos y útiles</li>
    <li><strong>⚡ Performance optimizada:</strong> Mínimos re-renders</li>
  </ul>
</div>

### 🍞 React Hot Toast

<div style="background-color: #fce4ec; border-left: 4px solid #e91e63; padding: 15px; margin: 15px 0;">
  <p><strong>🔔 Sistema de notificaciones:</strong></p>
  
  ```jsx
  // Configuración en App.jsx
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
  ```
  
  <ul style="margin-top: 10px;">
    <li><strong>✅ Notificaciones de éxito:</strong> Confirmación de operaciones</li>
    <li><strong>❌ Alertas de error:</strong> Feedback cuando algo falla</li>
    <li><strong>🎨 Diseño consistente:</strong> Estilos que combinan con la app</li>
    <li><strong>⏱️ Auto-dismiss:</strong> Desaparecen automáticamente</li>
  </ul>
</div>

<hr>

<h2>🎨 Diseño y UX</h2>

### 🌈 Características visuales

- **Glassmorphism:** Efectos de vidrio esmerilado con transparencias
- **Gradientes dinámicos:** Fondos con colores vibrantes
- **Animaciones suaves:** Transiciones y hover effects
- **Tipografía moderna:** Fuentes optimizadas para legibilidad
- **Sistema de iconos:** Emojis y símbolos intuitivos

### 📱 Responsividad

```css
/* Ejemplo de breakpoints */
@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .search-filters {
    width: 100%;
    max-width: 400px;
  }
}
```

<hr>

<h2>🚀 Instalación y uso</h2>

<h3>Requisitos previos</h3>

<ul>
  <li>Node.js (v18 o superior)</li>
  <li>npm o yarn</li>
  <li>Conexión a internet (para la API)</li>
</ul>

<h3>🔒 API Integration</h3>

La aplicación se conecta a la API REST de Retool para persistencia de datos:

```javascript
// Configuración en utils/peliculasUtils.jsx
export const API_URL = 'https://retoolapi.dev/vmJ8AL/peliculas';

// Estructura de datos
{
  id: 1,
  pelicula: "Avengers",
  genero: "Accion",
  estreno: 2020,
  calificacion: 9
}
```

<h3>⚡ Pasos para ejecutar</h3>

<div style='background-color: #f0f8f0; border-left: 4px solid #28a745; padding: 15px; margin: 15px 0;'>
  <p><strong>🚀 Ejecutar Mi Diario de Cine:</strong></p>

  <div style='background: white; padding: 12px; border-radius: 8px; border: 1px solid #28a745;'>
    <h4 style='margin-top: 0; color: #28a745;'>📱 Instalación</h4>
    <p style='margin: 5px 0;'><code>git clone [repository-url]</code></p>
    <p style='margin: 5px 0;'><code>cd mi-diario-de-cine</code></p>
    <p style='margin: 5px 0;'><code>npm install</code></p>
  </div>
  
  <div style='background: white; padding: 12px; border-radius: 8px; border: 1px solid #007bff; margin-top: 15px;'>
    <h4 style='margin-top: 0; color: #007bff;'>🎬 Desarrollo</h4>
    <p style='margin: 5px 0;'><code>npm run dev</code></p>
    <p style='margin: 5px 0;'>📍 Abre <a href="http://localhost:5173">http://localhost:5173</a> en tu navegador</p>
  </div>
  
  <div style='background: white; padding: 12px; border-radius: 8px; border: 1px solid #ffc107; margin-top: 15px;'>
    <h4 style='margin-top: 0; color: #f39c12;'>🏗️ Producción</h4>
    <p style='margin: 5px 0;'><code>npm run build</code></p>
    <p style='margin: 5px 0;'><code>npm run preview</code></p>
  </div>
  
  <div style='background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin-top: 15px;'>
    <p style='margin: 0;'><strong>💡 Tip:</strong> La aplicación funciona completamente del lado del cliente y se conecta automáticamente a la API. ¡No necesitas configurar ningún backend!</p>
  </div>
</div>

<hr>

<h2>🎭 Géneros disponibles</h2>

<div align="center">
<table>
<tr>
<td align="center">🎬 <strong>Acción</strong></td>
<td align="center">🎭 <strong>Drama</strong></td>
<td align="center">😂 <strong>Comedia</strong></td>
</tr>
<tr>
<td align="center">👻 <strong>Terror</strong></td>
<td align="center">🚀 <strong>Ciencia Ficción</strong></td>
<td align="center">💕 <strong>Romance</strong></td>
</tr>
<tr>
<td align="center">🔪 <strong>Thriller</strong></td>
<td align="center">🎨 <strong>Animación</strong></td>
<td align="center">📺 <strong>Documental</strong></td>
</tr>
<tr>
<td colspan="3" align="center">🎵 <strong>Musical</strong></td>
</tr>
</table>
</div>
