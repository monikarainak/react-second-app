import React from 'react'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import './collections-overview.style.css'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import PreviewCollection from '../preview-collection.component'

const CollectionOverview = ({collections}) =>{
    return(
        <div className="collections-overview">
{
                   collections.map(({id, ...otherCollectionProps}) => (
<PreviewCollection key={id} {...otherCollectionProps}/>
                   ))
               }
        </div>
    )
}
const mapStateToProps= createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
 )
export default connect(mapStateToProps)(CollectionOverview);