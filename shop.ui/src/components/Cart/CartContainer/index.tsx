
import _ from 'lodash';
import * as React from 'react';
import { ICartContainerProps } from '../types';
import CartItem from '../CartItem';

export default class CartContainer extends React.Component<ICartContainerProps, {}>{

    public render() {
        return (
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
                            { this.items() }
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }

    private items() {
        return _.map(this.props.cartItems, item => {
            return (
                <CartItem item={item.item} amount={item.amount} />
            );
        });
    }
}