import * as React from 'react';

function FooterBottom(props) {
    return (
          
          <div id="footer-bottom">
              <div className="container">
                  <div className="row">
                      <div className="col-md-7 col-sm-7 col-xs-12 footer-social-links-container">
                          <ul className="social-links clearfix">
                              <li><a href="#" className="social-icon icon-facebook"></a></li>
                              <li><a href="#" className="social-icon icon-twitter"></a></li>
                              <li><a href="#" className="social-icon icon-rss"></a></li>
                              <li><a href="#" className="social-icon icon-delicious"></a></li>
                              <li><a href="#" className="social-icon icon-linkedin"></a></li>
                              <li><a href="#" className="social-icon icon-flickr"></a></li>
                              <li><a href="#" className="social-icon icon-skype"></a></li>
                              <li><a href="#" className="social-icon icon-email"></a></li>
                          </ul>
                      </div>
                      
                      <div className="col-md-5 col-sm-5 col-xs-12 footer-text-container">
                          <p>&copy; 2014 Powered by Company&trade;. All Rights Reserved.</p>
                      </div>
                  </div>
              </div>
          </div>
    );
}

export default FooterBottom;