import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import File from './components/File';

ReactDOM.render(
  <File fileName="FirstFile" dateCreated="12/04/2018" fileStatus="Done"  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
