import React from 'react'
import { connect } from 'react-redux';
import './cart-dropdown.style.css'
import CustomButton from '../../custom-button.component'
import { withRouter } from 'react-router';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import CartItem from '../../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history }) =>{
return(
<div className="cart-dropdown">
<div className='cart-items'>
      {cartItems.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      )))
      : (
        <span className="empty-message"> Your cart is Empty</span>
      )
    }
       
      
    </div>
    <CustomButton id="cart-dropdown-button" onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
)
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));