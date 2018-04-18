import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';

import FileList from './components/FileList';
import QuickSearch from './containers/quickSearch';
import { Models } from './components/entities/models';
import { createStore } from 'redux';
import * as reducers from './stateManagement/reducers';

let files: Array<Models.File> = [
  new Models.File('File One', new Date(2018, 2, 1), 'Done'),
  new Models.File('File Two', new Date(2018, 2, 1), 'Processing')
];

const store = createStore<IQuickSearchState>(reducers.quickSearchHandleAction, {
    name: 'Test File One',
    dateCreated: new Date(2018, 2, 1),
    status: 'done',
    files: [
        new Models.File('File One', new Date(2018, 2, 1), 'Done'),
        new Models.File('File Two', new Date(2018, 2, 1), 'Processing')
    ]
});

ReactDOM.render(
  <Provider store={store}>
    <QuickSearch />
  </Provider>,
  document.getElementById('quickSearch') as HTMLElement
);

ReactDOM.render(
  <FileList files={files}/>,
  document.getElementById('fileList') as HTMLElement
);

registerServiceWorker();