import * as React from 'react';

function FooterInner(props) {
    return (

        <div id="inner-footer">

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12 widget">
                        <h3>MY ACCOUNT</h3>
                        <ul className="links">
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Personal information</a></li>
                            <li><a href="#">Addresses</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Your Vouchers</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-4 col-xs-12 widget">
                        <h3>INFORMATION</h3>
                        <ul className="links">
                            <li><a href="#">New products</a></li>
                            <li><a href="#">Top sellers</a></li>
                            <li><a href="#">Specials</a></li>
                            <li><a href="#">Manufacturers</a></li>
                            <li><a href="#">Suppliers</a></li>
                            <li><a href="#">Our stores</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-4 col-xs-12 widget">
                        <h3>MY ACCOUNT</h3>

                        <ul className="contact-list">
                            <li><strong>Venedor Ltd</strong></li>
                            <li>United Kingdom</li>
                            <li>Greater London</li>
                            <li>London 02587</li>
                            <li>Oxford Street 48/188</li>
                            <li>Working Days: Mon. - Sun.</li>
                            <li>Working Hours: 9.00AM - 8.00PM</li>
                        </ul>
                    </div>

                    <div className="clearfix visible-sm"></div>

                    <div className="col-md-3 col-sm-12 col-xs-12 widget">
                        <h3>FACEBOOK LIKE BOX</h3>

                        <div className="facebook-likebox">
                            <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fenvato&amp;colorscheme=dark&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default FooterInner;