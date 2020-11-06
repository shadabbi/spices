
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import classes from './Shop.module.scss';
import Category from '../../components/category/Category';
import CategoryList from '../../components/categoryList/CategoryList';



const shop = (props) => {
    const {category} = props.category;
    const categoryToRender = category.filter((item)=>item.title === props.match.params.category);

    return(
        <div className={classes.shop}>
            <header className={classes.bg} style={{backgroundImage:`url(${categoryToRender[0].bgUrl})`}}>

            </header>
            <div className={classes.results}>all results {categoryToRender[0].items.length}</div>
            <main>

                <div className={classes.categories}>
                        <CategoryList/>
                </div>

                <div className={classes.items}>
                    {categoryToRender[0].items.map(item=><Category 
                        item={item}
                        addToCart
                    {...item}/>)}
                </div>
            </main>

        </div>
    )
}

const mapStateToProps = state => ({
    category:state.category
})

export default withRouter(connect(mapStateToProps)(shop));

