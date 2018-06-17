import * as React from 'react';
import { Link } from 'react-router-dom';
import item12 from "./images/item12.jpg";
import item13 from "./images/item13.jpg";

class DropdownCartMenu extends React.Component {
    public render() {
        return (
            <div className="dropdown-cart-menu-container pull-right">
                <div className="btn-group dropdown-cart">
                    <button type="button" className="btn btn-custom dropdown-toggle" data-toggle="dropdown">
                        <span className="cart-menu-icon"></span>
                        0 item(s) <span className="drop-price">- $0.00</span>
                    </button>

                    <div className="dropdown-menu dropdown-cart-menu pull-right clearfix" role="menu">
                        <p className="dropdown-cart-description">Recently added item(s).</p>
                        <ul className="dropdown-cart-product-list">
                            <li className="item clearfix">
                                <a href="#" title="Delete item" className="delete-item"><i className="fa fa-times"></i></a>
                                <a href="#" title="Edit item" className="edit-item"><i className="fa fa-pencil"></i></a>
                                <figure>
                                    <a href="product.html"><img src={item12} alt="phone 4" /></a>
                                </figure>
                                <div className="dropdown-cart-details">
                                    <p className="item-name">
                                        <a href="product.html">Cam Optia AF Webcam </a>
                                    </p>
                                    <p>
                                        1x
                                        <span className="item-price">$499</span>
                                    </p>
                                </div>
                            </li>
                            <li className="item clearfix">
                                <a href="#" title="Delete item" className="delete-item"><i className="fa fa-times"></i></a>
                                <a href="#" title="Edit item" className="edit-item"><i className="fa fa-pencil"></i></a>
                                <figure>
                                    <a href="product.html"><img src={item13} alt="phone 2" /></a>
                                </figure>
                                <div className="dropdown-cart-details">
                                    <p className="item-name">
                                        <a href="product.html">Iphone Case Cover Original</a>
                                    </p>
                                    <p>
                                        1x
                                        <span className="item-price">$499<span className="sub-price">.99</span></span>
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <ul className="dropdown-cart-total">
                            <li><span className="dropdown-cart-total-title">Shipping:</span>$7</li>
                            <li><span className="dropdown-cart-total-title">Total:</span>$1005<span className="sub-price">.99</span></li>
                        </ul>
                        <div className="dropdown-cart-action">
                            <p><Link to="/cart" className="btn btn-custom-2 btn-block">Cart</Link></p>
                            <p><a href="checkout.html" className="btn btn-custom btn-block">Checkout</a></p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DropdownCartMenu;