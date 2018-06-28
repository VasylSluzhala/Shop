import * as React from 'react';
import { Link } from 'react-router-dom';

class HeaderTop extends React.Component {
    public render() {
      return (
        <div id="header-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="header-top-left">
                        <ul id="top-links" className="clearfix">
                            <li><a href="#" title="My Wishlist"><span className="top-icon top-icon-pencil"></span><span className="hide-for-xs">My Wishlist</span></a></li>
                            <li><a href="#" title="My Account"><span className="top-icon top-icon-user"></span><span className="hide-for-xs">My Account</span></a></li>
                            <li><Link to="/cart" title="My Cart"><span className="top-icon top-icon-cart"></span><span className="hide-for-xs">My Cart</span></Link></li>
                            <li><a href="checkout.html" title="Checkout"><span className="top-icon top-icon-check"></span><span className="hide-for-xs">Checkout</span></a></li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <div className="header-text-container pull-right">
                            <p className="header-text">Welcome to Venedor!</p>
                            <p className="header-link"><Link to="/login">Login</Link>&nbsp;or&nbsp;<Link to="/register">Create An Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
  }
}

  export default HeaderTop;

  /*
  
        <div id="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-top-left">
                            <ul id="top-links" className="clearfix">
                                <li><a href="#" title="My Wishlist"><span className="top-icon top-icon-pencil"></span><span className="hide-for-xs">My Wishlist</span></a></li>
                                <li><a href="#" title="My Account"><span className="top-icon top-icon-user"></span><span className="hide-for-xs">My Account</span></a></li>
                                <li><a href="cart.html" title="My Cart"><span className="top-icon top-icon-cart"></span><span className="hide-for-xs">My Cart</span></a></li>
                                <li><a href="checkout.html" title="Checkout"><span className="top-icon top-icon-check"></span><span className="hide-for-xs">Checkout</span></a></li>
                            </ul>
                        </div>
                        <div className="header-top-right">
                            
                            <div className="header-top-dropdowns pull-right">
                                <div className="btn-group dropdown-money">
                                    <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                                        <span className="hide-for-xs">US Dollar</span><span className="hide-for-lg">$</span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a href="#"><span className="hide-for-xs">Euro</span><span className="hide-for-lg">&euro;</span></a></li>
                                        <li><a href="#"><span className="hide-for-xs">Pound</span><span className="hide-for-lg">&pound;</span></a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown-language">
                                    <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                                        <span className="flag-container"><img src={england} alt="flag of england"/></span>
                                        <span className="hide-for-xs">English</span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a href="#"><span className="flag-container"><img src={italy} alt="flag of england"/></span><span className="hide-for-xs">Italian</span></a></li>
                                        <li><a href="#"><span className="flag-container"><img src={spain} alt="flag of italy"/></span><span className="hide-for-xs">Spanish</span></a></li>
                                        <li><a href="#"><span className="flag-container"><img src={france} alt="flag of france"/></span><span className="hide-for-xs">French</span></a></li>
                                        <li><a href="#"><span className="sm-separator"><img src={germany} alt="flag of germany"/></span><span className="hide-for-xs">German</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="header-text-container pull-right">
                                <p className="header-text">Welcome to Venedor!</p>
                                <p className="header-link"><Link to="/login">Login</Link>&nbsp;or&nbsp;<Link to="/register">Create An Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  */