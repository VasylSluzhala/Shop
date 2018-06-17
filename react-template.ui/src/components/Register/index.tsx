import * as React from 'react';

class Register extends React.Component {

    public render() {
        return (
            <section id="content">
        	<div id="breadcrumb-container">
        		<div className="container">
					<ul className="breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li className="active">Register Account</li>
					</ul>
        		</div>
        	</div>
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
						<header className="content-title">
							<h1 className="title">Register Account</h1>
							<p className="title-desc">If you already have an account, please login at <a href="#">login page</a>.</p>
						</header>
        				<div className="xs-margin"></div>
						<form action="#" id="register-form">
        				<div className="row">
        					
								<div className="col-md-6 col-sm-6 col-xs-12">
									
									<fieldset>
									<h2 className="sub-title">YOUR PERSONAL DETAILS</h2>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-user"></span><span className="input-text">First Name&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your First Name" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-user"></span><span className="input-text">Last Name&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Last Name" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-email"></span><span className="input-text">Email&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Email" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-phone"></span><span className="input-text">Telephone&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Telephone" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-fax"></span><span className="input-text">Fax</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Fax" />
									</div>
									
									</fieldset>
									
									<fieldset>
									<h2 className="sub-title">YOUR PASSWORD</h2>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-password"></span><span className="input-text">Password&#42;</span></span>
										<input type="password" className="form-control input-lg" placeholder="Your Password" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-password"></span><span className="input-text">Password&#42;</span></span>
										<input type="password" className="form-control input-lg" placeholder="Your Password" />
									</div>
									</fieldset>
									
									
								</div>
        						
        						<div className="col-md-6 col-sm-6 col-xs-12">
        						<fieldset>
									<h2 className="sub-title">YOUR ADDRESS</h2>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-company"></span><span className="input-text">Company&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Company" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-address"></span><span className="input-text">Address 1&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Address" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-address"></span><span className="input-text">Address 2&#42;</span></span>
										<input type="text"  className="form-control input-lg" placeholder="Your Address" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-city"></span><span className="input-text">City&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your City" />
									</div>
									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-postcode"></span><span className="input-text">Post Code&#42;</span></span>
										<input type="text" className="form-control input-lg" placeholder="Your Post Code" />
									</div>
									
                                    <div className="input-group">
                                        <span className="input-group-addon"><span className="input-icon input-icon-country"></span><span className="input-text">Country*</span></span>
                                        <div className="large-selectbox clearfix">
                                            <select id="country" name="country" className="selectbox">
                                                <option  value="United Kingdom">United Kingdom</option>
                                                <option  value="Brazil">Brazil</option>
                                                <option  value="France">France</option>
                                                <option  value="Italy">Italy</option>
                                                <option  value="Spain">Spain</option>
                                            </select>
                                        </div>
                                    </div>

									<div className="input-group">
										<span className="input-group-addon"><span className="input-icon input-icon-region"></span><span className="input-text">Region / State&#42;</span></span>
										<div className="large-selectbox clearfix">
                                            <select id="state" name="state" className="selectbox">
                                                <option  value="California">California</option>
                                                <option  value="Texas">Texas</option>
                                                <option  value="NewYork">NewYork</option>
                                                <option  value="Narnia">Narnia</option>
                                                <option  value="Jumanji">Jumanji</option>
                                            </select>
                                        </div>
									</div>
									
									</fieldset>
        						</div>
        					
        				</div>
						
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<fieldset className="half-margin">
									<h2 className="sub-title">NEWSLETTER</h2>
										<div className="input-desc-box">
											<span className="separator icon-box">&plus;</span>I wish to subscribe to the Venedor newsletter.
										</div>
									
									<div className="input-group custom-checkbox">
									 <input type="checkbox"/>
                                     <span className="checbox-container" ><i className="fa fa-check"></i></span>
									 I have reed and agree to the <a href="#">Privacy Policy</a>.
									 
									</div>
								</fieldset>
								
								<input type="submit" value="CREATE MY ACCCOUNT" className="btn btn-custom-2 md-margin" />
							</div>
						</div>
        				</form>
        			</div>
        		</div>
			</div>
        
        </section>
        );
    }
}

export default Register;