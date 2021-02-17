import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import data_json from './component/Well_DATA.json';



var data = data_json.Wells;

class WellSearchDropdown extends React.Component {
   constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }
 
 makeStyles(){
  formControl: {
    margin: 10px,
    minWidth: 500px,
  },
  selectEmpty: {
    marginTop: 25px,
  },
};
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
	render() {
  return (
  
  <div>
  
  <FormControl >
        <InputLabel htmlFor="age-native-simple">Select</InputLabel>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}  />
      </FormControl style=this.makeStyles>
	   <img src ={this.state.img} width ="150"    object-fit="cover" className="center"/>
	 </div>
    
	
    )
  }
}
  
  export default WellSearchDropdown;

