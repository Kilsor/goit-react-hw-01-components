import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: 'red',
    green: 'green',
    orange: 'orange',
    blue: 'blue',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<App />
    </ThemeProvider>
    
  </React.StrictMode>
);
