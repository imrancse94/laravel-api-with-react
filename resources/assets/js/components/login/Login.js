import React, {Component} from 'react';
import  "./login.css";
import ReeValidate from 'ree-validate';
import {
    Button,
    Divider,
    Dimmer,
    Form,
    Grid,
    Header,
    Icon,
    Loader,
    Message,
    Segment} from 'semantic-ui-react';
import axios from 'axios'
import { BrowserRouter, Redirect} from 'react-router-dom';
import Dashboard from "../content/Dashboard";
import {login} from "../Services/AuthService";
class Login extends Component {

    constructor()
    {
        super();
        this.validator = new ReeValidate({
            email: 'required|email',
            password: 'required|min:6'
        });

        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isLoading: false,
            errors: this.validator.errors,
            content:false,
            component:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showPassword() {
        var key_attr = $('#key').attr('type');

        if (key_attr != 'text') {

            $('.checkbox').addClass('show');
            $('#key').attr('type', 'text');

        } else {

            $('.checkbox').removeClass('show');
            $('#key').attr('type', 'password');

        }

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const { errors } = this.validator;
        const {credentials} = this.state;
        credentials[name] = value;

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors, credentials})
            });
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const {credentials} = this.state;
        this.validator.validateAll(credentials)
            .then(success => {
                console.log(success)
                if (success) {
                    this.setState({
                        isLoading: true
                    });

                    this.submit(credentials)

                }
            });
    }

    submit(credentials)
    {
        let response = false;
        response = login(credentials);
        if(response){
            this.setState({
                component: <Dashboard/>
            });
        }

    }

    render(){
        const {errors} = this.state;
        const {component} = this.state;
        if(component != ""){
            return ( component)
        } else {
            return(
                <React.Fragment>
                    <section id="login">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-wrap">
                                        <h1>Admin Login</h1>
                                        <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                                            <Dimmer active inverted>
                                                <Loader size='large'>Authenticating...</Loader>
                                            </Dimmer>
                                        </Segment>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="email" className="sr-only">Email</label>
                                                <input  onChange={this.handleChange} type="email" name="email" id="email" className="form-control" placeholder="Email"/>
                                                {errors.has('email') && <p>
                                                    {errors.first('email')}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key" className="sr-only">Password</label>
                                                <input  onChange={this.handleChange} type="password" name="password" id="key" className="form-control" placeholder="Password"/>
                                            </div>
                                            <div className="checkbox">
                                                <span className="character-checkbox" onClick={this.showPassword.bind(this)}></span>
                                                <span className="label">Show password</span>
                                            </div>
                                            <button onClick={this.handleSubmit} type="button" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Log in">Log in</button>

                                        </form>
                                        <a href="javascript:;" className="forget" data-toggle="modal"
                                           data-target=".forget-modal">Forgot your password?</a>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer id="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <p>Copyright © - 2018</p>
                                    <p>Powered by <strong><a href="#" target="_blank">Imran Hossain</a></strong></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </React.Fragment>
            )
        }



    }
}

export default Login;