import * as React from 'react';

class Cart extends React.Component {

    public render() {
        return (
            <section id="content">
                <div id="breadcrumb-container">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header className="content-title">
                                <h1 className="title">Shopping Cart</h1>
                                <p className="title-desc">Just this week, you can use the free premium delivery.</p>
                            </header>
                            <div className="xs-margin"></div>
                            <div className="row">

                                <div className="col-md-12 table-responsive">

                                    <table className="table cart-table">
                                        <thead>
                                            <tr>
                                                <th className="table-title">Product Name</th>
                                                <th className="table-title">Product Code</th>
                                                <th className="table-title">Unit Price</th>
                                                <th className="table-title">Quantity</th>
                                                <th className="table-title">SubTotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="item-name-col">
                                                    <figure>
                                                        <a href="#"><img src="images/products/compare1.jpg" alt="Lowlands Lace Blouse" /></a>
                                                    </figure>
                                                    <header className="item-name"><a href="#">Lowlands Lace Blouse</a></header>
                                                    <ul>
                                                        <li>Color: White</li>
                                                        <li>Size: SM</li>
                                                    </ul>
                                                </td>
                                                <td className="item-code">MP125984154</td>
                                                <td className="item-price-col"><span className="item-price-special">$1175</span></td>
                                                <td>
                                                    <div className="custom-quantity-input">
                                                        <input type="text" name="quantity" value="1" />
                                                        <a href="#" className="quantity-btn quantity-input-up"><i className="fa fa-angle-up"></i></a>
                                                        <a href="#" className="quantity-btn quantity-input-down"><i className="fa fa-angle-down"></i></a>
                                                    </div>
                                                </td>
                                                <td className="item-total-col"><span className="item-price-special">$1175</span>
                                                    <a href="#" className="close-button"></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="item-name-col">
                                                    <figure>
                                                        <a href="#"><img src="images/products/compare2.jpg" alt="Samsung Galaxy Ace" /></a>
                                                    </figure>
                                                    <header className="item-name"><a href="#">Samsung Galaxy Ace</a></header>
                                                    <ul>
                                                        <li>Color: Black</li>
                                                        <li>Size: XL</li>
                                                    </ul>
                                                </td>
                                                <td className="item-code">MP125984154</td>
                                                <td className="item-price-col"><span className="item-price-special">$1475</span></td>
                                                <td>
                                                    <div className="custom-quantity-input">
                                                        <input type="text" name="quantity" value="1" />
                                                        <a href="#" className="quantity-btn quantity-input-up"><i className="fa fa-angle-up"></i></a>
                                                        <a href="#" className="quantity-btn quantity-input-down"><i className="fa fa-angle-down"></i></a>
                                                    </div>
                                                </td>
                                                <td className="item-total-col"><span className="item-price-special">$1475</span>
                                                    <a href="#" className="close-button"></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="item-name-col">
                                                    <figure>
                                                        <a href="#"><img src="images/products/compare3.jpg" alt="Iphone Case Cover Original" /></a>
                                                    </figure>
                                                    <header className="item-name"><a href="#">Iphone Case Cover Original</a></header>
                                                    <ul>
                                                        <li>Color: White</li>
                                                        <li>Size: SM</li>
                                                    </ul>
                                                </td>
                                                <td className="item-code">MP125984154</td>
                                                <td className="item-price-col"><span className="item-price-special">$399</span></td>
                                                <td>
                                                    <div className="custom-quantity-input">
                                                        <input type="text" name="quantity" value="3" />
                                                        <a href="#" className="quantity-btn quantity-input-up"><i className="fa fa-angle-up"></i></a>
                                                        <a href="#" className="quantity-btn quantity-input-down"><i className="fa fa-angle-down"></i></a>
                                                    </div>
                                                </td>
                                                <td className="item-total-col"><span className="item-price-special">$1197</span>
                                                    <a href="#" className="close-button"></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <div className="lg-margin"></div>

                            <div className="row">
                                <div className="col-md-8 col-sm-12 col-xs-12 lg-margin">

                                    <div className="tab-container left clearfix">
                                        <ul className="nav-tabs">
                                            <li className="active"><a href="#shipping" data-toggle="tab">Shipping &amp; Taxes</a></li>
                                            <li><a href="#discount" data-toggle="tab">Discount Code</a></li>
                                            <li><a href="#gift" data-toggle="tab">Gift voucher </a></li>

                                        </ul>
                                        <div className="tab-content clearfix">
                                            <div className="tab-pane active" id="shipping">

                                                <form action="#" id="shipping-form">
                                                    <p className="shipping-desc">Enter your destination to get a shipping estimate.</p>
                                                    <div className="form-group">
                                                        <label htmlFor="select-country" className="control-label">Country&#42;</label>
                                                        <div className="input-container normal-selectbox">
                                                            <select id="select-country" name="select-country" className="selectbox">
                                                                <option value="Japan">Japan</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="France">France</option>
                                                                <option value="Italy">Italy</option>
                                                                <option value="Spain">Spain</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="xss-margin"></div>
                                                    <div className="form-group">
                                                        <label htmlFor="select-state" className="control-label">Regison/State&#42;</label>
                                                        <div className="input-container normal-selectbox">
                                                            <select id="select-state" name="select-state" className="selectbox">
                                                                <option value="California">California</option>
                                                                <option value="Texas">Texas</option>
                                                                <option value="NewYork">NewYork</option>
                                                                <option value="Narnia">Narnia</option>
                                                                <option value="Jumanji">Jumanji</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="xss-margin"></div>
                                                    <div className="form-group">
                                                        <label htmlFor="select-country" className="control-label"  >Post Code&#42;</label>
                                                        <div className="input-container">
                                                            <input type="text" className="form-control" placeholder="Your fax" />
                                                        </div>
                                                    </div>
                                                    <div className="xss-margin"></div>
                                                    <p className="text-right">
                                                        <input type="submit" className="btn btn-custom-2" value="GET QUOTES" />
                                                    </p>
                                                </form>

                                            </div>

                                            <div className="tab-pane" id="discount">
                                                <p>Enter your discount coupon code here.</p>
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Coupon code" />

                                                    </div>
                                                    <input type="submit" className="btn btn-custom-2" value="APPLY COUPON" />
                                                </form>
                                            </div>

                                            <div className="tab-pane" id="gift">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dignissimos nostrum debitis optio molestiae in quam dicta labore obcaecati ullam necessitatibus animi deleniti minima dolor suscipit nobis est excepturi inventore.</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-12 col-xs-12">

                                    <table className="table total-table">
                                        <tbody>
                                            <tr>
                                                <td className="total-table-title">Subtotal:</td>
                                                <td>$434.50</td>
                                            </tr>
                                            <tr>
                                                <td className="total-table-title">Shipping:</td>
                                                <td>$6.00</td>
                                            </tr>
                                            <tr>
                                                <td className="total-table-title">TAX (0%):</td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Total:</td>
                                                <td>$440.50</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="md-margin"></div>
                                    <a href="#" className="btn btn-custom-2">CONTINUE SHOPPING</a>
                                    <a href="#" className="btn btn-custom">CHECKOUT</a>
                                </div>
                            </div>
                            <div className="md-margin2x"></div>

                            <div className="similiar-items-container carousel-wrapper">
                                <header className="content-title">
                                    <div className="title-bg">
                                        <h2 className="title">Similiar Products</h2>
                                    </div>
                                    <p className="title-desc">Note the similar products - after buying for more than $500 you can get a discount.</p>
                                </header>

                                <div className="carousel-controls">
                                    <div id="similiar-items-slider-prev" className="carousel-btn carousel-btn-prev"></div>
                                    <div id="similiar-items-slider-next" className="carousel-btn carousel-btn-next carousel-space"></div>
                                </div>
                                <div className="similiar-items-slider owl-carousel">
                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item3.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item3-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="item-price">$160<span className="sub-price">.99</span></span>
                                            </div>
                                            <span className="new-rect">New</span>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="80"></div>
                                                </div>
                                                <span className="ratings-amount">
                                                    5 Reviews
                                                </span>
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item1.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item1-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="item-price">$100</span>
                                            </div>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="99"></div>
                                                </div>
                                                <span className="ratings-amount">
                                                    4 Reviews
                                                </span>
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item4.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item4-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="old-price">$100</span>
                                                <span className="item-price">$80</span>
                                            </div>
                                            <span className="discount-rect">-20%</span>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="75"></div>
                                                </div>
                                                <span className="ratings-amount">
                                                    2 Reviews
                                                </span>
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item10.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item10-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="old-price">$120</span>
                                                <span className="item-price">$60</span>
                                            </div>
                                            <span className="discount-rect">-50%</span>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="65"></div>
                                                </div>
                                                <span className="ratings-amount">
                                                    4 Reviews
                                                </span>
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item5.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item5-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="item-price">$99</span>
                                            </div>
                                            <span className="new-rect">New</span>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-result" data-result="40"></div>
                                                </div>
                                                <span className="ratings-amount">
                                                    3 Reviews
                                                </span>
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item item-hover">
                                        <div className="item-image-wrapper">
                                            <figure className="item-image-container">
                                                <a href="product.html">
                                                    <img src="images/products/item7.jpg" alt="item1" className="item-image" />
                                                    <img src="images/products/item7-hover.jpg" alt="item1  Hover" className="item-image-hover" />
                                                </a>
                                            </figure>
                                            <div className="item-price-container">
                                                <span className="item-price">$280</span>
                                            </div>
                                        </div>
                                        <div className="item-meta-container">
                                            <div className="ratings-container">
                                            </div>
                                            <h3 className="item-name"><a href="product.html">Phasellus consequat</a></h3>
                                            <div className="item-action">
                                                <a href="#" className="item-add-btn">
                                                    <span className="icon-cart-text">Add to Cart</span>
                                                </a>
                                                <div className="item-action-inner">
                                                    <a href="#" className="icon-button icon-like">Favourite</a>
                                                    <a href="#" className="icon-button icon-compare">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Cart;