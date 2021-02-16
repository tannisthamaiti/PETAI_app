import React from 'react';
import {Component} from "react";
import axios from "axios";
import './dropdown.css';
import well from './images/well_log.png';

class Case1 extends Component {

    state = {

      // Initially, no file is selected
      selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

      // Update the state
      this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {


      // Details of the uploaded file
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      //axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

      if (this.state.selectedFile) {

        return (


<div >

              <img src={well} width ="500" alt="N/A"  object-fit="cover" class="center"/>
</div>

        );
      } else {
        return (
          <div>

          </div>
        );
      }
    };

    render() {

      return (
        <div class="w3-container" style={{ width: "600px" }}>
            <h3>
              Well Log Analysis
            </h3>
            <h4>
              Upload well log file in csv format.
            </h4>


            <div>
                <input type="file" onChange={this.onFileChange} />
                <button className="btn btn-success" onClick={this.onFileUpload}>
                  Upload
                </button>
            </div>
          {this.fileData()}
        </div>

      );
    }
  }



export default Case1;