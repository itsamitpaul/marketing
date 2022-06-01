import React, {useEffect} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history, isSignedIn }) => {

  useEffect(()=>{
    if(!isSignedIn){
      // history.push('/');
      window.location.replace('http://localhost:8080/')
    }
  })

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/marketing/pricing" component={Pricing} />
            <Route path="/marketing" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
