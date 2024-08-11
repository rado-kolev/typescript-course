import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './starter/09-rtk/store.ts';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <QueryClientProvider client={queryClient}>
  //   <App />
  // </QueryClientProvider>

  <Provider store={store}>
    <App />
  </Provider>
);
