export async function loginUser(email: string, password: string) {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'x-api-key': 'reqres-libre-v1' // Solo si es necesario
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Error al iniciar sesión')
  }

  return response.json()
}
