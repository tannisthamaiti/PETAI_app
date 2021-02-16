import React from 'react';
import {Component} from "react";
import axios from 'axios';


class Case3 extends Component {
    state = {
        metrics: [],
    };

    componentDidMount() {
        axios({
            method: 'get',
            headers: { 'accept': 'application/json' },
            url: 'http://95.216.39.25:8080/healthcheck?accept=application/json'
          }).then(res=> {
            console.log(res);
            this.setState({metrics: res.data});
        })
    }

    render() {
        return (
            <div>
                <p> Message is:{this.state.metrics}</p>
            </div>
        );
    }
}
export default Case3;