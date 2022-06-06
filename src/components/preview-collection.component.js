import React from 'react'
import './preview-collection.style.css'
import CollectionItem from './collection-item.component'

function PreviewCollection({ title, items}) {

  return(
      <div className="collection-preview">
          <h1 className="title">{title.toUpperCase()}</h1>
          <div className='preview'>
          {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>

      </div>
  )  
}
export default PreviewCollection