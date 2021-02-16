import React from 'react';
import {Component} from "react";
import axios from 'axios';
import well from './images/well_log.png';



class Case5 extends Component {
    state={
        file:null,
        metrics: []
    }
   
handleFile(e){
	let file = e.target.files[0]
	this.setState({file:file})
}
handleUpload(e){
	let file = this.state.file
	let formdata = new FormData();
	formdata.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=multipart-form-boundary;',
                'Access-Control-Allow-Origin': '*',
                'accept': 'application/json'
            }
        };
		axios.post("http://95.216.39.25:8080/Image/predict",formdata,config)
            .then(res=> {
            console.log(res.data.prediction);
            this.setState({metrics: JSON.stringify(res.data.prediction)})
            alert("file upload successfully");

        })
    }


    render() {
        return (
            <div>
                <h3>JUA metrics results </h3>
		<h4>Upload a *.png file</h4>
				<form>
				<div>
				<label>Select File</label>
				<input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
				
            </div>
			<button type="button" onClick={(e)=>this.handleUpload(e)} >Upload</button>
			</form>
                <div>
                <p> {this.state.metrics}</p>
            </div>
			</div>
        );
    }
}
export default Case5;
