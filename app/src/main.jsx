import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import router from './routes/router';
import './index.css'
import { GlobalContextProvider } from './state_management/ContextAPI/GlobalContextProvider';
import { Footer } from './components/web/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
      <Footer />
    </GlobalContextProvider>
  </StrictMode>,
)
