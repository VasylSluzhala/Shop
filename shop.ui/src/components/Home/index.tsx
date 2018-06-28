import _ from 'lodash';
import * as React from 'react';
import { IHomeProps } from './types';
import { connect } from 'react-redux';
import { fetchProducts } from './actions';

class Home extends React.Component<IHomeProps, {}> {

    public componentDidMount() {
        this.props.fetchProducts();
    }

    public render() {
        return (
            <div>
                <div>Home</div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

    private renderPosts() {
        return _.map(this.props.products, product => {
            return (
                <li className='list-group-item' key={product.Id}>
                    {product.Name} Price: {product.Price}
                </li>
            );
        });
    }
}

function mapStateToProps(state){
    return { products: state.products }
}

export default connect(mapStateToProps, {fetchProducts})(Home);