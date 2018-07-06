import _ from 'lodash';
import * as React from 'react';
import {IProductItemContainerProps} from '../types';
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

    private items(){
        return _.map(this.props.products, product => {
            return (
                <ProductItem product={product} />
            );
        });
    }
}

export default ProductItemContainer;