import React from 'react'
import ShoppingBagIcon from '../shopping-bag-icon'
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.style.css'

const CartIcon = ({ toggleCartHidden,itemCount}) =>{
    return(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBagIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
  });
  
  export default connect(
    mapStateToProps ,
    mapDispatchToProps
  )(CartIcon);