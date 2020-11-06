import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import classes from './CategoryList.module.scss';

const categoryList = (props) => {
    const {category} = props.category

    console.log(category)
    return(
        <div>
            <ul>
                {category.map(item=><li><Link to={item.title}>{item.title}</Link></li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    category:state.category
})

export default connect(mapStateToProps)(categoryList);