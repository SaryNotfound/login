// Contexto de autenticación para manejar el estado de login en toda la aplicación

import React, { createContext, useContext, useState } from 'react';

// Definimos la interfaz para el contexto de autenticación
interface AuthContextType {
  isAuthenticated: boolean; // Indica si el usuario está autenticado
  login: () => void; // Función para iniciar sesión
  logout: () => void; // Función para cerrar sesión
}

// Creamos el contexto con un valor inicial nulo
const AuthContext = createContext<AuthContextType | null>(null);

// Proveedor del contexto de autenticación
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  const login = () => {
    setIsAuthenticated(true); // Cambia el estado a autenticado
  };

  const logout = () => {
    setIsAuthenticated(false); // Cambia el estado a no autenticado
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
