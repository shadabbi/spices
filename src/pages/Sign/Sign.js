import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import classes from './Sign.module.scss'
import {signInWithGoogle, signInWithFacebook} from '../../firebase/firebase';
import {auth} from '../../firebase/firebase';


class sign extends Component {

      state = {
        email:'',
        password:'',
  
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(this.state.email, this.state.password);

    }

  render() {
      
    return (
      <main className={classes['main']}>
        <div className={classes['wrapper']}>
          <div className={classes['card']}>
            <div className={classes['title']}>
              <h1 className={[classes['title'], classes['title-large']].join(' ')}>Sign In</h1>
              <p className={[classes['title'], classes['title-subs']].join(' ')}>New user? <span><Link to="/Create" className={classes['linktext']}>Create an account</Link></span></p>
            </div>
            <form className={classes['form']}>
              <div className={classes['form-group']}>
                <input value={this.state.email} onChange={(e)=>this.inputHandler(e)} type="email" name="email" id="email" className={classes['input-field']} placeholder="Email address" />
              </div>
              <div className={classes['form-group']}>
                <input value={this.state.password} onChange={(e)=>this.inputHandler(e)} type="password" name="password" id="password" className={classes['input-field']} placeholder="Password" />
              </div>
              <div className={classes['form-group']}>
                <a href="./index.html" className={classes['linktext']}>Forgot Password</a>
                <input onClick={(e)=>this.submitHandler(e)} type="button" name="submit" className={classes['input-submit']} defaultValue="Login" />
              </div>
            </form>
            <div className={classes['line']}>
              <span className={classes['line-bar']} />
              <span className={classes['line-text']}>Or</span>
              <span className={classes['line-bar']} />
            </div>
            <div className={classes['method']}>
              <div className={classes['method-item']} onClick={()=>signInWithGoogle()}>
                <a href="#" className={classes['btn-action']}>
                  <i className={[classes['icons'],'fab fa-google', classes['icons-google']].join(' ')} />
                  <span>Sign in with Google</span>
                </a>
              </div>
              <div className={classes['method-item']} onClick={()=>signInWithFacebook()}>
                <a href="#" className={classes['btn-action']}>
                  <i className={[classes['icons'], classes['icons-facebook'],'fab fa-facebook'].join(' ')} />
                  <span>Sign in with Facebook</span>
                </a>
              </div>
  
            </div>
          </div>
        </div>
      </main>
    );
  }
    
    
}

export default sign;