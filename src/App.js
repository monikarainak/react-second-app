import React from 'react'
import './App.css'
import{ Switch,BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import ShopPage from './pages/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from "./pages/homepage.component";
import Header from './components/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
       <Router>
      <Header />
     
      <Switch>
<Route exact path='/' component={HomePage}/>
<Route  path='/shop' component={ShopPage}/>
<Route  path='/checkout' component={CheckoutPage}/>
<Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />

</Switch>
</Router>

    </div>
  );
  }
}
const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
