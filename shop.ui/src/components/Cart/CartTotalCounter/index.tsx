import * as React from 'react';

class CartTotalCounter extends React.Component{
    public render() {
        return (
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
        );
    }
}

export default CartTotalCounter;