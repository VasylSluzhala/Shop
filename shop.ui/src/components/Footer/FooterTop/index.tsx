import * as React from "react";
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';
import item6 from './images/item6.jpg';
import item7 from './images/item7.jpg';
import item8 from './images/item8.jpg';
import item9 from './images/item9.jpg';

class FooterTop extends React.Component {

    public render() {
        return (
            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12 widget">
                            <div className="title-bg">
                                <h3>Popular</h3>
                            </div>

                            <div className="footer-popular-slider flexslider footerslider">
                                <ul className="slides">
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item1} alt="item1" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item2} alt="item2" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Gap Graphic Cuffed</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item3} alt="item3" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Lauren Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item4} alt="item4" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Lauren Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item5} alt="item5" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item6} alt="item6" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Spahyr Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="md-margin visible-xs"></div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12 widget">
                            <div className="title-bg">
                                <h3>Featured</h3>
                            </div>

                            <div className="footer-featured-slider flexslider footerslider">
                                <ul className="slides">
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item4} alt="item4" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item5} alt="item5" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Gap Graphic Cuffed</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item6} alt="item6" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Lauren Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item7} alt="item7" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Lauren Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item8} alt="item8" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item9} alt="item9" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Spahyr Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="md-margin visible-xs"></div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12 widget">
                            <div className="title-bg">
                                <h3>Specials</h3>
                            </div>

                            <div className="footer-specials-slider flexslider footerslider">
                                <ul className="slides">
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item7} alt="item7" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item8} alt="item8" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Gap Graphic Cuffed</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item9} alt="item9" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Lauren Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item1} alt="item1" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Lauren Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$40</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item2} alt="item2" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Jacket Suiting Blazer</a>
                                            </p>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="100"></div>
                                                </div>
                                            </div>
                                            <div className="item-price-special">$18.5</div>
                                        </div>
                                        <div className="slide-item clearfix">
                                            <figure className="item-image-container">
                                                <a href="product.html"><img src={item3} alt="item3" /></a>
                                            </figure>
                                            <p className="item-name">
                                                <a href="product.html">Women's Spahyr Dress</a>
                                            </p>
                                            <div className="item-price-special">$30</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterTop;