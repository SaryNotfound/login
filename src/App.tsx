// filepath: c:\Users\sierr\my-login-app\src\App.tsx
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* ...existing code... */}
      </BrowserRouter>
    </AuthProvider>
  );
}