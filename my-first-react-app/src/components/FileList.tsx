/// <reference path="./entities/models.ts" />
/// <reference path="./entities/interfaces.d.ts" />

import * as React from 'react';

import File from './File';

export interface Props {
  files : Array<IFile>;
}

function FileList({ files }: Props) {
  return (
    <section>
      {files.map(function(file : Models.File) {
        // ReactDOM.render(
          return <File 
            key={file.name} 
            fileName={file.name} 
            dateCreated={file.dateCreated.toDateString()} 
            fileStatus={file.status}  
          />;
          // ,
          // document.getElementById(elementId) as HTMLElement
        // );
      })}
    </section>
  );
}

export default FileList;