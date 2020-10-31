import React from 'react';
import {connect} from 'react-redux'

import classes from './Cart.module.scss';
import CartItem from '../../components/cartItem/CartItem'
import StripeBtn from '../../components/stripeBtn/StripeBtn'


const checkout = (props) => {
    const total = props.items.reduce((prev,item)=>prev+item.price * item.quantity,0)

    return (
        <div className={classes['checkout-page']}>
            <div className={classes['checkout-header']}>
                <div className={classes['header-block']}>
                    <span>Product</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Description</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Quantity</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Price</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Remove</span>
                </div>
            </div>

            {props.items.map(item=><CartItem key={item.id} item={item} />)}

        <div className={classes.total}>
            <span>TOTAL: RS {total}</span>
        </div>

            <StripeBtn  price={total}/>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        items:state.cart.cartItems,

    })
}

export default connect(mapStateToProps)(checkout);