import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App basename={process.env.PUBLIC_URL}/>, document.getElementById('root'));
registerServiceWorker();
