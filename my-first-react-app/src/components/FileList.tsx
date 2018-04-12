import * as React from 'react';

export interface Props {
  files: Array<IFile>;
}

function fileList({ files }: Props) {

  return (
    // var fileRows = [];
    
    // for (let file of files) {
    //   fileRows.push(
            // <File fileName={file.fileName} 
            //     dateCreated={file.dateCreated.parse()} 
            //     fileStatus={file.fileStatus} />);
    // }

    <section>
      {/* {fileRows} */}
    </section>
  );
}

export default fileList;