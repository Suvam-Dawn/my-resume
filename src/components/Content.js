import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import Login from './Login';
// import FormSample from './FormSample';
// import Home from './Home';
export default class Content extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path={['/formSample']} component={FormSample} />
        <Route exact path={['/login']} component={Login} />
        <Route exact path={['/']} component={Home} /> */}
        <Route render={() => <h3 style={{color: '#fff'}}>Coming soon.</h3>} />
      </Switch>
    );
  }
}
