import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </QueryClientProvider>
);
