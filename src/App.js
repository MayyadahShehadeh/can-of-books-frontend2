import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from "@auth0/auth0-react";

// import {withAuth0 }from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MyFavoriteBooks from './MyFavoriteBooks';

class App extends React.Component {
  
  render() {
  return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Routes>
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              <Route exact path="/" 
              element={ 
                this.props.auth0.isAuthenticated ? <MyFavoriteBooks/> : <Login/>}> 
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                    <Route 
              exact path="/profile"
              element={<Profile/>}
            >
              
            </Route> 

                </Routes>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);