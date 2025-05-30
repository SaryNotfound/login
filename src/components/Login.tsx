// src/components/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/authService';

// Este componente maneja el formulario de inicio de sesión
// y la interacción con el servicio de autenticación.

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // Añadimos esto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Validar campos en tiempo real
  useEffect(() => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      setEmailError('');
    } else if (!emailRegex.test(email)) {
      setEmailError('Por favor, ingresa un email válido');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('');
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
    } else {
      setPasswordError('');
    }

    setIsValid(emailRegex.test(email) && password.length >= 6);
  }, [email, password]);

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Limpiamos cualquier mensaje de error previo

    if (!isValid) {
      setErrorMessage('Por favor, completa los campos correctamente.');
      return;
    }

    try {
      // Llamamos al servicio de autenticación con las credenciales ingresadas
      const data = await loginUser(email, password);
      console.log('Login exitoso:', data);

      // Guardamos el token simulado en localStorage
      localStorage.setItem('token', data.token);

      // Actualizamos el estado de autenticación y redirigimos al usuario
      login();
      navigate('/home');
    } catch (error: any) {
      console.error('Error detallado:', error);
      setErrorMessage(error.message || 'Error al iniciar sesión'); // Mostramos el mensaje de error
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              emailError ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              passwordError ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Entrar
        </button>

        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
