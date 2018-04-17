import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import FileList from './components/FileList';
import QuickSearch from './components/QuickSearch';
import { Models } from './components/entities/models';

let files: Array<Models.File> = [
  new Models.File('File One', new Date(2018, 2, 1), 'Done'),
  new Models.File('File Two', new Date(2018, 2, 1), 'Processing')
]

ReactDOM.render(
  <QuickSearch defaultDate={new Date(2018, 4, 17)}/>,
  document.getElementById('quickSearch') as HTMLElement
);

ReactDOM.render(
  <FileList files={files}/>,
  document.getElementById('fileList') as HTMLElement
);

registerServiceWorker();