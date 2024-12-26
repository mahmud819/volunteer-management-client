import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ThemeProvider } from './Themecontrol/themeControl.jsx';

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />  
      </AuthProvider>
      </ThemeProvider>
    </StrictMode>,
  
)
