import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Case1 from "./Case1";
import Case2 from "./Case2";
import WellSearch from './WellSearch';
import SimpleSelect from './Dropdown';
import Case5 from "./Case5";
import Header from "./Header";

function App() {
 return(
           <div className ="container">
			   <div className="head1"><Header/></div>
               <div className="item1"><Case1/></div>
			   <div className="item2"><WellSearch/> </div>
               <div className="item1"><Case2/></div>
               <div className="item2"><SimpleSelect/></div>
               <div className="item1"><Case5/></div>
              
           </div>
       );


}

export default App;
