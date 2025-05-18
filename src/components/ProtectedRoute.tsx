import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()// Accedemos al estado de login

  // Si está autenticado, le mostramos la página protegida
  // Si no, lo mandamos al login ("/")
  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute
