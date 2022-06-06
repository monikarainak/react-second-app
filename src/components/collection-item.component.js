import React from 'react'
import './collection-item.style.css'
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';
import CustomButton from './custom-button.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
     return(
         <div className="collection-item">
<div
className="image"
style={{backgroundImage:`url(${imageUrl})`}}/>
<div className="collection-footer">
<span className="collection-name">{name}</span>
<span className="collection-price">{price}</span>

</div>
<CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
         </div>
     );
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CollectionItem);