import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Dashboard from './content/Dashboard';
import Login from "./login/Login";
export default class Master extends Component {

    constructor(){
        super()
        this.state = {component:<Login/>};
    }

    componentDidMount(){
        let token = localStorage.getItem('token');
        if(token.length > 0){
            this.setState({component:<Dashboard/>});
        }
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
