import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Shop from './pages/Shop/Shop'
import Sign from './pages/Sign/Sign'
import CreateNew from './pages/Sign/CreateNew'
import {auth, createUserProfile} from './firebase/firebase'
import {setUser} from './redux/user/action'
import User from './pages/user/user'


class App extends Component {

  unSubscribe = null;
  componentDidMount() {
    this.unSubscribe =  auth.onAuthStateChanged( async user=>{
   
      createUserProfile(user)
       this.props.dispatch(setUser(user))
    })
  }


  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    const {user} = this.props.user;
    return (
      <div >
        <Header />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/shop' exact component={Home}></Route>
            <Route path='/cart' exact component={Cart}></Route>
            <Route path='/user' exact component={User}></Route>
            <Route path='/Sign' exact render={()=>user?<Redirect to='/'/>:<Sign/>}></Route>
            <Route path='/create' exact component={CreateNew}></Route>
            <Route path='/:category'  component={Shop}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user:state.user
})

export default connect(mapStateToProps)(App);
