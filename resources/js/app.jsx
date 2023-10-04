
import './bootstrap';
import '../sass/app.scss'

import jQuery from 'jquery';
window.$ = jQuery;


import ReactDOM from 'react-dom/client';        
import Final from './components/Final';



const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Final />);