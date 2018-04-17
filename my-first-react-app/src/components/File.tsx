import * as React from 'react';

export interface Props {
  fileName: string;
  dateCreated: string;
  fileStatus: string;
}

function File({ fileName, dateCreated, fileStatus }: Props) { 
      if (!fileName) {
        throw new Error('A file name is required');
      }
    
      if (!fileStatus) {
        throw new Error('A file status is required');
      }
      
      return (
        <tr>
            <th scope="row">--</th>
            <td>{fileName}</td>
            <td>{dateCreated}</td>
            <td>{fileStatus}</td>
        </tr>
      );
}

export default File;