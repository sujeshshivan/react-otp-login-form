
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import Index from "./examples/Index.js";
import Landing from "./examples/Landing.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Register from "./examples/Register";
import OtpValidation from './OtpValidation';
// import { SuspenseLoader } from '../components/SuspenseLoder';


// const Login = React.lazy(() => import('./Login'));


function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<SuspenseLoader />}> */}
        <Switch>
          <Route path="/login" exact render={props => <Login {...props} />} />
          <Route path="/otp-validate" exact render={props => <OtpValidation {...props} />} />

          {/* <Route path="/" exact render={props => <Index {...props} />} /> */}
          <Route
            path="/landing-page"
            exact
            render={props => <Landing {...props} />}
          />
          <Route path="/login-page" exact render={props => <Login {...props} />} />
          <Route
            path="/profile-page"
            exact
            render={props => <Profile {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={props => <Register {...props} />}
          />
          <Redirect
            from="/"
            to="/login"
          />
        </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}


export default App;