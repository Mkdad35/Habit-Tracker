import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HabitsProvider } from './HabitsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitsProvider>
      <App />
    </HabitsProvider>
  </StrictMode>
);
