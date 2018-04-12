namespace app.models {
    
  export class File implements IFile {
    public name : string;            
    public dateCreated : Date;    
    public status : string;

    constructor(name : string, dateCreated : Date, status : string) {
      this.name = name;
      this.dateCreated = dateCreated;
      this.status = status;
    }
  }    
}