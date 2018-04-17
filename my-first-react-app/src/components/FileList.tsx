import * as React from 'react';

import File from './File';

import { Models } from './entities/models';
import { Table } from 'react-bootstrap';

export interface Props {
  files : Array<IFile>;
}

function FileList({ files }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>File Name</th>
          <th>Date Created</th>
          <th>File Status</th>
        </tr>
      </thead>
      <tbody>
        {files.map(function(file : Models.File) {
            return <File 
              key={file.name} 
              fileName={file.name} 
              dateCreated={file.dateCreated.toDateString()} 
              fileStatus={file.status}  
            />;
        })}
      </tbody>
  </Table>
  );
}

export default FileList;