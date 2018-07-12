import _ from 'lodash';
import * as React from 'react';
import {IProductItemContainerProps, IProduct} from '../types';
import ProductItem from '../ProductItem';

class ProductItemContainer extends React.Component<IProductItemContainerProps, {}>{

    public render() {
        return (
            <div className="category-item-container">
                <div className="row">
                    {this.items()}
                </div>
            </div>
        );
    }

    private amountInCart(product: IProduct):number{
        const index = _.findKey(this.props.cartItems, o=> o.item.Id === product.Id);
        if(index) {
            return this.props.cartItems[index].amount;
        }
        return 0;
    }

    private items(){
        return _.map(this.props.products, product => {
            return (
                <ProductItem product={product} amountInCart={this.amountInCart(product)} />
            );
        });
    }
}

export default ProductItemContainer;