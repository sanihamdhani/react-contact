import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './component/ContactApp';
 
// styling
import './style/style.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);

