# Aplicación de Login

Esta es una aplicación de login desarrollada con React, TypeScript y Tailwind CSS.

## Características

- Autenticación de usuarios con validación manual de credenciales.
- Rutas protegidas con React Router.
- Validación de formularios en tiempo real.
- Diseño responsive con Tailwind CSS.
- Simulación de un backend utilizando JSONPlaceholder.

## Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- React Router
- Context API

## Instalación

1. Clona el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Repositorio

El proyecto está alojado en: [GitHub](https://github.com/SaryNotfound/login)

## Estructura del proyecto

```
my-login-app/
├── src/
│   ├── components/
│   │   ├── Login.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── services/
│   │   └── authService.ts
│   └── App.tsx
├── public/
└── package.json
```

## Notas

- Las credenciales válidas para el inicio de sesión son:
  - **Email**: `eve.holt@reqres.in`
  - **Password**: `cityslicka`
- Si las credenciales no son correctas, se mostrará un mensaje de error en el formulario.
