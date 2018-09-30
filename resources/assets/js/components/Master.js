import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Dashboard from './content/Dashboard';
import Login from "./login/Login";
import cookie from "react-cookies";
export default class Master extends Component {

    constructor(){
        super()
        this.state = {component:<Login/>};
    }

    componentDidMount(){
        let token = cookie.load('token');//this.isEmpty(localStorage.getItem('token'));
        if(token != null){
            this.setState({component:<Dashboard/>});
        } else {
            this.setState({component:<Login/>});
        }
    }
    isEmpty(val){
        return (val === undefined || val == null || val.length <= 0) ? true : false;
    }

    render() {
        return (
            this.state.component
        );
    }
}
/// React js oauth 2

if (document.getElementById('example')) {
    ReactDOM.render(<Master />, document.getElementById('example'));
}
