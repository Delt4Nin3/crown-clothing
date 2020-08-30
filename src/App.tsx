import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'typeface-open-sans-condensed';
import './App.css';

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

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

  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: undefined
    }
  }

  unsubscribeFromAuth = () => {
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // @ts-ignore-next-line
          userRef.onSnapshot(snapShot => {
            this.setState({
                currentUser: {
                  id: snapShot.id,
                  // @ts-ignore-next-line
                  displayName: snapShot.data().displayName,
                  // @ts-ignore-next-line
                  email: snapShot.data().email,
                  // @ts-ignore-next-line
                  createdAt: snapShot.data().createdAt
                }
              },
              () => console.log(this.state));
          });

        } else {
          this.setState({currentUser: undefined})
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage}/>
        <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
      </Switch>
    </div>;
  }
}

export default App;
