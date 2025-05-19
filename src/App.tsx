// Archivo principal de la aplicación que define las rutas y el contexto de autenticación

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Proveedor del contexto de autenticación
import LoginPage from './pages/LoginPage'; // Página de inicio de sesión
import Home from './pages/Home'; // Página de inicio
import ProtectedRoute from './components/ProtectedRoute'; // Componente para proteger rutas

function App() {
  return (
    <AuthProvider>
      {/* Envolvemos la aplicación con el proveedor de autenticación */}
      <BrowserRouter>
        <Routes>
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/" element={<LoginPage />} />

          {/* Ruta protegida para la página de inicio */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;