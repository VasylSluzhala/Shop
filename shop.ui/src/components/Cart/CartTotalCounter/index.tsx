import _ from 'lodash';
import * as React from 'react';

import { ITotalCounterProps } from '../types';

class CartTotalCounter extends React.Component<ITotalCounterProps>{
    
    public render() {
        return (
            <div className="col-md-4 col-sm-12 col-xs-12">

                <table className="table total-table">
                    <tbody>
                        <tr>
                            <td className="total-table-title">Subtotal:</td>
                            <td>${this.countSubtotal()}</td>
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
                            <td>${this.countSubtotal()}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="md-margin"></div>
                <a href="#" className="btn btn-custom-2">CONTINUE SHOPPING</a>
                <a href="#" className="btn btn-custom">CHECKOUT</a>
            </div>
        );
    }

    private countSubtotal(){
        let sum = 0;
        _.forOwn(this.props.cartItems, (value) => {
            sum += value.item.Price * value.amount;
        });
        return _.round(sum);
    }
}

export default CartTotalCounter;