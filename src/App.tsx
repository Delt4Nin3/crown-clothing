import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'typeface-open-sans-condensed';
import './App.css';
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import { setCurrentUser } from "./redux/user";

interface User {
  id: string
  displayName: string
  email: string
  createdAt: unknown
}

interface State {
  currentUser?: User
}

class App extends React.Component<any, State> {
  unsubscribeFromAuth = () => {
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // @ts-ignore-next-line
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              // @ts-ignore-next-line
              displayName: snapShot.data().displayName,
              // @ts-ignore-next-line
              email: snapShot.data().email,
              // @ts-ignore-next-line
              createdAt: snapShot.data().createdAt
            });
          });
        } else {
          this.props.setCurrentUser(undefined)
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return <div>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage}/>
        <Route exact path={'/signin'} render={
          () => {
            return this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)
          }}/>
      </Switch>
    </div>;
  }
}

// @ts-ignore-next-line
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
