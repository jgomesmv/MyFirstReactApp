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
        <article className="file">
            <div className="fileName">
                <p>
                    File Name
                </p>
                <p>
                    {fileName}
                </p>
            </div>
            <div className="dateCreated">
                <p>
                    Date Creation
                </p>
                <p>
                    {dateCreated}
                </p>
            </div>
            <div className="fileStatus">
                <p>
                    Status
                </p>
                <p>
                    {fileStatus}
                </p>
            </div>
        </article>
    );
}

export default File;