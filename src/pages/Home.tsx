// Página de inicio que se muestra después de un inicio de sesión exitoso
// Permite al usuario cerrar sesión y redirigirse al login

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth(); // Hook para manejar el estado de autenticación
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleLogout = () => {
    localStorage.removeItem('token'); // Borra el token del almacenamiento local
    logout(); // Actualiza el estado de autenticación
    navigate('/'); // Redirige al usuario al login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="mb-4">Has iniciado sesión correctamente</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
