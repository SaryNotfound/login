// Este archivo contiene la lógica para manejar el inicio de sesión
// y realizar solicitudes a la API de prueba JSONPlaceholder.

export const loginUser = async (email: string, password: string) => {
  try {
    console.log('Intentando login con:', { email, password });

    // Validación manual de credenciales
    // Solo permite el inicio de sesión con las credenciales correctas
    if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
      throw new Error('Credenciales incorrectas');
    }

    // Usamos JSONPlaceholder como API de prueba
    // Enviamos una solicitud POST con el email y la contraseña
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Estado de la respuesta:', response.status); // Depuración
    const data = await response.json();
    console.log('Datos de la respuesta:', data); // Depuración

    // Si la respuesta no es exitosa, lanzamos un error
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    // Simulamos un token de autenticación
    return { token: 'fake-token', ...data };
  } catch (error) {
    console.error('Error en loginUser:', error);
    throw error;
  }
};