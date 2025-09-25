import React, { useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './dark-mode.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
useEffect(() => {
  document.body.classList.add('dark-mode'); // <-- apply globally
}, []);
root.render(
  <React.StrictMode> 
      
      <App />
    
  </React.StrictMode>
);
