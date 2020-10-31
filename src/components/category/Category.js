import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cart/action'

import classes from './Category.module.scss';


const category = (props) => {
    return(
        <div className={classes.category} onClick={()=>{
                                            
           if(props.urlPara) {
                props.history.push(`/${props.urlPara}`)
           } else if(props.addToCart) {
                props.dispatch(addToCart(props.item))
           }

           return
        }}>
            <div className={classes.bg}>
                <img src={props.imgUrl}></img>
            </div>
            <div className={classes.caption}>
            <h1>{props.title}</h1>
            </div>
        </div>
    )
}


export default connect()(withRouter(category));