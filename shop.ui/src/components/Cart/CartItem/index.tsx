import _ from 'lodash';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import { ICartItemProps } from '../../Home/types';
import { addToCart, substractFromCart } from '../actions';

import item1Img from '../img/compare1.jpg';
import { connect } from 'react-redux';

class CartItem extends React.Component<ICartItemProps, {}>{

constructor(props) {
    super(props);
}

    public render() {
        return (
            <tr>
                <td className="item-name-col">
                    <figure>
                        <a href="#"><img src={item1Img} alt="Lowlands Lace Blouse" /></a>
                    </figure>
                    <header className="item-name"><a href="#">{this.props.item.Name}</a></header>
                    <ul>
                        <li>Color: White</li>
                        <li>Size: SM</li>
                    </ul>
                </td>
                <td className="item-code">MP125984154</td>
                <td className="item-price-col"><span className="item-price-special">${this.props.item.Price}</span></td>
                <td>
                    <div className="custom-quantity-input">
                        <input type="text" name="quantity" value={_.max([this.props.amount, 1])} />
                        <a onClick={()=> this.props.addToCart(this.props.item)} className="quantity-btn quantity-input-up"><i className="fa fa-angle-up"></i></a>
                        <a onClick={()=> this.props.substractFromCart(this.props.item)} className="quantity-btn quantity-input-down"><i className="fa fa-angle-down"></i></a>
                    </div>
                </td>
                <td className="item-total-col"><span className="item-price-special">${_.round(_.max([this.props.amount, 1]) * this.props.item.Price, 2)}</span>
                    <a href="#" className="close-button"></a>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart, substractFromCart}, dispatch);
}

export default connect(null, mapDispatchToProps)(CartItem);