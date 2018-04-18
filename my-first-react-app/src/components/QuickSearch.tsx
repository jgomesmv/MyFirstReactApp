import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as Moment from 'moment';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';

export interface Props {
    name: string;
    dateCreated: Date;
    status: string;
    files: Array<IFile>;
    onFileStatusChange?: () => void;
    onDateCreatedChange?: (any | null);
    onFileNameChange?: () => void;
    onSearchFilesClick?: () => void;
}

function QuickSearch({ 
    name, 
    dateCreated, 
    status, 
    onFileStatusChange, 
    onDateCreatedChange, 
    onFileNameChange, 
    onSearchFilesClick }: Props
) {
    return (
        <Form inline={true}>
            <FormGroup controlId="fileStatus">
                <ControlLabel>Select Status</ControlLabel>
                <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    value={status} 
                    onChange={onFileStatusChange}
                >
                    <option value="select">select</option>
                    <option value="done">Done</option>
                    <option value="inProcess">In Process</option>
                </FormControl>
            </FormGroup>
            <FormGroup controlId="dateCreated" >
                <ControlLabel>Date Created</ControlLabel>
                <DatePicker
                    selected={Moment(dateCreated.toDateString())}
                    onChange={onDateCreatedChange}
                />
            </FormGroup>
            <FormGroup controlId="fileName" >
                <ControlLabel>File Name</ControlLabel>
                <FormControl
                    type="text"
                    value={name}
                    placeholder="Enter file name"
                    onChange={onFileNameChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <Button type="submit" onClick={onSearchFilesClick}>Search</Button>
        </Form>
    );
}
  
export default QuickSearch;