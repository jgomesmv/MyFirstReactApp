import * as React from 'react';

import File from './File';

import { Models } from './entities/models';

export interface Props {
  files : Array<IFile>;
}

function FileList({ files }: Props) {
  return (
    <section>
      {files.map(function(file : Models.File) {
          return <File 
            key={file.name} 
            fileName={file.name} 
            dateCreated={file.dateCreated.toDateString()} 
            fileStatus={file.status}  
          />;
      })}
    </section>
  );
}

export default FileList;