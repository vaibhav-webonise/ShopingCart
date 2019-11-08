import React from 'react'
import { connect } from 'react-redux'
import './Listitems.css';
import {clearProductsAction} from './store/action/Actioncreater'

class Listitems extends React.Component {

    clearProducts=()=>{
         this.props.removeProducts();
    }

    redirect=()=>{
        this.props.history.push('/');
    }
   
    render(){
    return (
        <div class="List">
           <h3 >My Cart</h3>
           
            <table>
                <thead>
                    <tr >
                        <th align="left">Product ID</th>
                        <th align="left">Product Name</th>
                        <th align="left">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.products.map(item => (
                        <tr>
                            <td align="left"><span>{item.productId}</span></td>
                            <td align="left"><span>{item.productName}</span></td>
                            <td align="left"><span>{item.quantity}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br />
           <input type="button" value="Pay now" onClick={this.clearProducts.bind(null)}/>
            <input type="button" onClick={this.redirect} value="Back to Cart"/>
        </div>
    )
}
    
}
export const mapStateToProps = state => ({
    products: state.addedProducts
})

export const mapDispatchToProps = dispatch => ({
    removeProducts:()=>dispatch(clearProductsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Listitems);
