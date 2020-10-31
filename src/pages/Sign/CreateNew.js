import React, { Component } from 'react';

import classes from './CreateNew.module.scss';
import {auth} from '../../firebase/firebase'

class createNew extends Component {

    state = {
        email:'',
        pass:'',
        cpass:''
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })

        console.log(this.state)
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.pass !== this.state.cpass) {
            console.log('pass not same');
            return
        }
        auth.createUserWithEmailAndPassword(this.state.email, this.state.pass);

    }
   render() {
       
    return(
        <div>
             <form className={classes.multistepsform}>
                 <fieldset>
                     <h2 className={classes['fs-title']}>Create your account</h2>
                     <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.inputHandler(e)} />
                     <input type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={(e)=>this.inputHandler(e)} />
                     <input type="password" name="cpass" placeholder="Confirm Password" value={this.state.cpass} onChange={(e)=>this.inputHandler(e)} />
                     <input type="button" name="next" className={classes['action-button']}
                             onClick={(e)=>this.submitHandler(e)}
                      value="Submit" />
                 </fieldset>
   
             </form>
        </div>
     )
   }
}

export default createNew;