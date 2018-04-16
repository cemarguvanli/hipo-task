import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';

import Home from 'containers/Home';
import VenueDetail from 'containers/VenueDetail';
import NotFoundPage from 'containers/NotFoundPage';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/venue/:id" component={VenueDetail} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
