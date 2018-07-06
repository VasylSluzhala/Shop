import _ from 'lodash';
import * as React from 'react';
import {IProductItemProps, IProduct} from '../types';

import item1Img from '../images/item1.jpg';
import item1HoverImg from '../images/item1-hover.jpg';

export default function ProductItem(props: IProductItemProps){

    const formatPrice = (price, old) =>{
        price = _.round(price, 2);
        const whole = _.floor(price);
        const fractional = _.round(price - whole, 2)*100;
        return (
            <span className={ old ? "old-price" : "item-price"}>${whole}<span className="sub-price">.{fractional}</span></span>
        );
    };

    const countDiscount = (product:IProduct) => {
        if(!product.OldPrice || product.OldPrice < product.Price) { return; }
        
        const percent = _.round((product.OldPrice-product.Price)/product.OldPrice*100);

        return (
            <span className="discount-rect">-{percent}%</span>
        );
    };

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
                    { props.product.OldPrice && props.product.OldPrice > props.product.Price && formatPrice(props.product.OldPrice, true) }
                    { formatPrice(props.product.Price, false) }
                </div>
                { props.product.IsNew && <span className="new-rect">New</span> }
                { countDiscount(props.product) }
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
                <h3 className="item-name"><a href="product.html">{props.product.Name}</a></h3>
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
    );
}