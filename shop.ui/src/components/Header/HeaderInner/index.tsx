import * as React from 'react';
import Navigation from '../Navigation';
import DropdownCartMenu from '../../DropdownCartMenu/index'
import logo from "../images/logo3.png";
import england from "../images/england-flag.png";
import italy from "../images/italy-flag.png";
import france from "../images/france-flag.png";
import spain from "../images/spain-flag.png";
import germany from "../images/germany-flag.png";

class HeaderInner extends React.Component {
    public render() {
        return (
            <div id="inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-xs-12 logo-container">
                            <h1 className="logo clearfix">
                                <span>Responsive eCommerce Template</span>
                                <a href="index.html" title="Venedor eCommerce Template"><img src={logo} alt="Venedor Commerce Template" width="196" height="42" /></a>
                            </h1>
                        </div>
                        <div className="col-md-7 col-sm-7 col-xs-12 header-inner-right">

                            <div className="header-inner-right-wrapper clearfix">
                                <DropdownCartMenu />

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
                                            <span className="flag-container"><img src={england} alt="flag of england" /></span>
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
                            </div>

                            <p className="quick-contact-text">SUPPORT SERVICE: +(404) 851-21-48-15; +(404) 158-14-25-78</p>
                        </div>
                    </div>
                </div>

                <Navigation />
            </div>

        );
    }
}

export default HeaderInner;

/*

<div id="inner-header">
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-md-3 col-sm-3 col-xs-12 logo-container">
                        <h1 classNameName="logo clearfix">
                            <span>Responsive eCommerce Template</span>
                            <a href="index.html" title="Venedor eCommerce Template"><img src={logo} alt="Venedor Commerce Template" width="200" height="54"/></a>
                        </h1>
                    </div>
                    <div classNameName="col-md-9 col-sm-9 col-xs-12 header-inner-right">
                        <div classNameName="header-inner-right-wrapper clearfix">

                            <DropdownCartMenu />

                            <div id="quick-access">
                                <form classNameName="form-inline quick-search-form" role="form" action="#">
                                    <div classNameName="form-group">
                                        <input type="text" classNameName="form-control" placeholder="Search here"/>
                                    </div>
                                    <button type="submit" id="quick-search" classNameName="btn btn-custom"></button>
                                </form>
                            </div>

                            <div classNameName="header-box contact-infos pull-right">
                                <ul>
                                    <li><span classNameName="header-box-icon header-box-icon-skype"></span>venedor_support</li>
                                    <li><span classNameName="header-box-icon header-box-icon-email"></span><a href="mailto:venedor@gmail.com">venedor@gmail.com</a></li>
                                </ul>
                            </div>
                            
                            <div classNameName="header-box contact-phones pull-right clearfix">
                                <span classNameName="header-box-icon header-box-icon-earphones"></span>
                                <ul classNameName="pull-left">
                                    <li>+(404) 158 14 25 78</li>
                                    <li>+(404) 851 21 48 15</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Navigation/>
        </div>

*/