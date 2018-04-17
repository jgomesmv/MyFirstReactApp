import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as Moment from 'moment';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';

export interface Props {
    defaultDate : Date;
    onSearchFilesClick?: () => void;
}

var currentFileStatus:string = '';
var currentDateCreated:Date = new Date();
var currentfileName:string = '';

function OnFileStatusChange(e:any){
    currentFileStatus = e.target.value;
}

function OnDateCreatedChange(date:Moment.Moment) {
    currentDateCreated = date.toDate();
}

function OnFileNameChange(e:any){
    currentFileStatus = e.target.value;
}

function QuickSearch({ defaultDate, onSearchFilesClick }: Props) {
    return (
        <Form inline={true}>
            <FormGroup controlId="fileStatus">
                <ControlLabel>Select Status</ControlLabel>
                <FormControl 
                    componentClass="select" 
                    placeholder="select" 
                    onChange={OnFileStatusChange}>
                    <option value="select">select</option>
                    <option value="done">Done</option>
                    <option value="inProcess">In Process</option>
                </FormControl>
            </FormGroup>
            <FormGroup controlId="dateCreated" >
                <ControlLabel>Date Created</ControlLabel>
                <DatePicker
                    selected={Moment(defaultDate.toDateString())}
                    onChange={OnDateCreatedChange}
                />
            </FormGroup>
            <FormGroup controlId="fileName" >
                <ControlLabel>File Name</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter file name"
                    onChange={OnFileNameChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <Button type="submit" onClick={onSearchFilesClick}>Search</Button>
        </Form>
    );
}
  
export default QuickSearch;