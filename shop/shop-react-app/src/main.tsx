import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </Provider>
    
  </StrictMode>,
)
