import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import './assets/spritesheet/sprite.css';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
