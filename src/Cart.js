import React from 'react'
import { connect } from 'react-redux'
import initState from './productdata'
import './Listitems.css';
import { addProductAction, removeProductAction, updateProductCountAction } from './store/action/Actioncreater'
export class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      count: 0
    })
  }

  addProduct = (id) => {
    let productObject = initState.products.find(product => product.productId === id);
    this.props.addProductAction(productObject.productId);
    this.state.count = this.state.count + 1;
  }

  removeProduct = (id) => {
    if (this.state.count === 0) {
      alert("can't be less than 0")
      return;
    }
    let productObject = initState.products.find(product => product.productId === id);
    this.props.removeProductAction(productObject.productId);
    this.state.count = this.state.count - 1;
  }

  redirect = () => {
    this.props.updateProductCount(this.state.count);
    this.props.history.push('/listitems');
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.redirect} value="View my cart" />
        <h3>Total products to your cart:{this.props.products.productCount}</h3>
        <table>
          <thead>
            <br />
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {initState.products.map(product => (
              <tr>
                <td align="center">{product.productId}</td>
                <td align="center">{product.productName}</td>
                <td>
                  <input type='button' value='-' onClick={this.removeProduct.bind(null, product.productId)} />
                  <input type='button' value='+' onClick={this.addProduct.bind(null, product.productId)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>{this.state.count} products adding to the cart</h4>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  products: state
})

const mapDispatchToProps = dispatch => ({
  addProductAction: (productId) => dispatch(addProductAction(productId)),
  removeProductAction: (productId) => dispatch(removeProductAction(productId)),
  updateProductCount: (count) => dispatch(updateProductCountAction(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
