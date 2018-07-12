import _ from 'lodash';
import * as React from 'react';
import {IProductItemProps, IProduct} from '../types';
import { addToCart } from '../../Cart/actions';

import item1Img from '../images/item1.jpg';
import item1HoverImg from '../images/item1-hover.jpg';
import { connect } from 'react-redux';

class ProductItem extends React.Component<IProductItemProps, {}>{

    public render() {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="item item-hover">
            <div className="item-image-wrapper">
                <figure className="item-image-container">
                    <a href="product.html">
                        <img src={item1Img} alt="item1" className="item-image" />
                        <img src={item1HoverImg} alt="item1  Hover" className="item-image-hover" />
                    </a>
                </figure>
                <div className="item-price-container">
                    { this.props.product.OldPrice && this.props.product.OldPrice > this.props.product.Price && this.formatPrice(this.props.product.OldPrice, true) }
                    { this.formatPrice(this.props.product.Price, false) }
                </div>
                { this.props.product.IsNew && <span className="new-rect">New</span> }
                { this.countDiscount(this.props.product) }
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
                <h3 className="item-name"><a href="product.html">{this.props.product.Name}</a></h3>
                <div className="item-action">
                    <a onClick={() => this.props.addToCart(this.props.product)} className="item-add-btn">
                        <span className="icon-cart-text">{this.props.amountInCart > 0 ? "Add 1 more" : "Add to Cart"}</span>
                    </a>
                    <div className="item-action-inner">
                        <a href="#" className="icon-button icon-like">Favourite</a>
                        <a href="#" className="icon-button icon-compare">Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

private formatPrice = (price, old) =>{
    price = _.round(price, 2);
    const whole = _.floor(price);
    const fractional = _.round(price - whole, 2)*100;
    return (
        <span className={ old ? "old-price" : "item-price"}>${whole}<span className="sub-price">.{fractional}</span></span>
    );
};

private countDiscount = (product:IProduct) => {
    if(!product.OldPrice || product.OldPrice < product.Price) { return; }
    
    const percent = _.round((product.OldPrice-product.Price)/product.OldPrice*100);

    return (
        <span className="discount-rect">-{percent}%</span>
    );
};
}

export default connect(null, {addToCart})(ProductItem);