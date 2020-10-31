import React from 'react';
import {connect} from 'react-redux';

import classes from './Categories.module.scss';
import Category from '../category/Category'


const categories = (props) => {
    console.log(props)
    return(
        <div className={classes['categories-container']}>
               

                    {props.categories.category.map(category=>
                    {   
                        return(

                            <div className='mt-5'>
                                <h1>{category.title}</h1>
                                <div className={classes.categories}>
                                    {category.items.slice(0,3).map(item=><Category 
                                        urlPara={category.title}
                                    {...item}/>)}
                                </div>
                                
                            </div>
                        )
                    
                    })}
            
        </div>
    )
}

const mapStateToProps = state => ({
    categories:state.category
})

export default connect(mapStateToProps)(categories);