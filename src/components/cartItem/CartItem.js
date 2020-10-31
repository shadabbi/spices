import React from 'react';
import {connect} from 'react-redux'

import classes from './CartItem.module.scss';
import {removeItem, incQuantity, decQuantity} from '../../redux/cart/action';


const checkoutItem = (props) =>  {

    return(
        <div className={classes['checkout-item']}>
            <div className={classes['image-container']}>
                <img src={props.item.imgUrl}></img>
            </div>
            <span className={classes.title}>{props.item.title}</span>
            <span className={classes.quantity}>
                <div className={classes.arrow}   onClick={()=>{
                            if(props.item.quantity <=1) {
                                props.removeItem(props.item)
                            }
                            else {
                                props.decQuantity(props.item)
                            }
                        }} >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>

                <span>{props.item.quantity}</span>
                    
                <div className={classes.arrow} onClick={()=>props.incQuantity(props.item)}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>

            </span>
            <span className={classes.price}>{props.item.price}</span>
            <div onClick={()=>props.removeItem(props.item)} className={classes['remove-button']}>&#9747;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return ({
        removeItem: item => dispatch(removeItem(item)),
        incQuantity: item => dispatch(incQuantity(item)),
        decQuantity: item => dispatch(decQuantity(item)),
    })
}

export default connect(null, mapDispatchToProps)(checkoutItem);

