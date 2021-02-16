import DataTable from 'react-data-table-component';
import {Component} from "react";
import React from 'react';

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height//
        maxWidth: '40px',
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
        maxWidth: '40px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};



const data = [{
  "precision": 10,
  "recall": 20,
  "f1-score": 20,
  "support": 20
},
  {
  "precision": 50,
  "recall": 20,
  "f1-score": 40,
  "support": 20
}
]
const columns = [
  {
    name: 'precision',
    selector: 'precision',
    sortable: true,
  },
  {
    name: 'recall',
    selector: 'recall',
    sortable: true,
    right: true,
  },
    {
    name: 'f1-score',
    selector: 'f1-score',
    sortable: true,
    right: true,
  },
    {
    name: 'support',
    selector: 'support',
    sortable: true,
    right: true,
  },

];

class Case2 extends Component {

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
    tableData = () => {

      if (this.state.selectedFile) {

        return (
              <div>
          <h3>Well Correlation Metrices</h3>
      <DataTable
        //title="Well Correlation Metrices"
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
      </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    render() {

      return (
        <div >
            <h1 className="ex1">
              Case2: Well Correlation Analysis
            </h1>
               <p>
                No labels are given to the learning algorithm, leaving it on its own to find structure in its input.
             </p>
                    <h3>
              Upload well log file in csv format.
            </h3>


            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.tableData()}
        </div>

      );
    }
  }



export default Case2;