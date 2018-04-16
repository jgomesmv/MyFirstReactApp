import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './components/entities/models.ts';

import FileList from './components/FileList';

import { Models } from './components/entities/models';

let file: Models.File;
file = new Models.File('File One', new Date(2018, 2, 1), 'Done');
let fileTwo: Models.File = new Models.File('File Two', new Date(2018, 2, 1), 'Processing');

let files: Models.File[] = [];
files.push(file);
files.push(fileTwo);

ReactDOM.render(
  <FileList files={files}/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();