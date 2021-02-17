import React, { Component } from 'react'
import Select from 'react-select'
import data_json from './component/Well_DATA.json';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import './dropdown.css';



var data = data_json.Wells;

class WellSearch extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }



  getOptions(){

    const options = data.map(d => ({
      "value" : d.value,
      "label" : d.label,
      "img" : d.img

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({value:e.value, label:e.label, img:e.img})
  }

  componentDidMount(){
      this.getOptions()
  }
  getStyles(){
    const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

  }

  render() {
    const classes = this.getStyles.bind(this);
    console.log(this.state.selectOptions)
    return (
     <div >
         <h4> Select clustering types: </h4>
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Wells</InputLabel>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}  />
        <p></p>
         </FormControl>

        <img src ={this.state.img} width ="150"    object-fit="cover" className="center"/>

        </div>




    )
  }
}


export default WellSearch;

//ReactDOM.render(<PlanetSearch />, document.getElementById('react-search'));

//https://scriptverse.academy/tutorials/reactjs-select.html
//https://www.youtube.com/watch?v=QSWQFknMBNA&t=251s
//https://stackoverflow.com/questions/40726623/react-dynamic-dropdown-box-examples-howto
//basic tutorial: https://scriptverse.academy/tutorials/reactjs-select.html
//https://bezkoder.com/react-file-upload-axios/
