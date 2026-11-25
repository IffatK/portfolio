import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/typography.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/hero.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
