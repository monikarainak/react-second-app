import React from 'react'
import { connect } from 'react-redux';
import './directory.style.css'

import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../redux/directory/directory.selectors'
import MenuItem from './menu-item.component';

const Directory = ({sections})=>{
    
        return(
            <div className='directory-menu'>
                {
                   sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem  key={id} {...otherSectionProps}/>
                    ))
                    }
                
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory)