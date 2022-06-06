import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import './header.style.css'
import { auth } from '../firebase/firebase.utils'
import CartIcon from './cart-icon/cart-icon.component';
import CartDropdown from './cart/cart-dropdown/cart-dropdown.component';


const Header = ({currentUser,hidden}) => {
    return(
    <div className="header">
     
<Link  className="logo-container" to="/">
<img src="https://i.pinimg.com/originals/de/7c/e4/de7ce48f483468ed4cc8a5b92742cad5.jpg" className="logo" style={{width:"200px", height:"107px"}}/>
</Link>

<div className="options">
    
    <Link className="option" to='/shop'>
SHOP
    </Link>
    <Link className="option" to="/contact">
CONTACT
    </Link>
    {
        currentUser ? 
        (
<div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
        )
        :
        (
<Link className="option" to="/signin">
    SIGN IN
</Link>
        )
    }
   <CartIcon/>
</div>
{hidden ? null : <CartDropdown />}

    </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Header);