import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/style.css';
import './styles/responsive.css';
import './styles/animate.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
