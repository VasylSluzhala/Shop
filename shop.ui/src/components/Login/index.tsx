import * as React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    public render() {
        return (
            <section id="content">
                <div id="breadcrumb-container">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Login</li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header className="content-title">
                                <h1 className="title">Login or Create An Account</h1>
                                <div className="md-margin"></div>
                            </header>

                            <div className="row">

                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <h2>New Customer</h2>

                                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                    <div className="md-margin"></div>
                                    <Link to="/register" className="btn btn-custom-2">Create An Account</Link>
                                    <div className="lg-margin"></div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <h2>Registered Customers</h2>
                                    <p>If you have an account with us, please log in.</p>
                                    <div className="xs-margin"></div>

                                    <form id="login-form" method="get" action="#">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="input-icon input-icon-email"></span><span className="input-text">Email&#42;</span></span>
                                            <input type="text" className="form-control input-lg" placeholder="Your Email" />
                                        </div>
                                        <div className="input-group xs-margin">
                                            <span className="input-group-addon"><span className="input-icon input-icon-password"></span><span className="input-text">Password&#42;</span></span>
                                            <input type="password" className="form-control input-lg" placeholder="Your Password" />
                                        </div>
                                        <span className="help-block text-right"><a href="#">Forgot your password?</a></span>
                                        <button className="btn btn-custom-2">LOGIN</button>
                                    </form>
                                    <div className="sm-margin"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Login;