import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './content/Dashboard';
import Login from "./login/Login";
export default class Master extends Component {

    constructor(){
        super()
        this.state = {component:<Login/>};
    }

    componentDidMount(){
        axios
            .get('api/login')
            .then(({ data })=> {
                this.setState({
                    kind: data.kind,
                    data: data.data.children
                });
            })
            .catch((err)=> {})
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
