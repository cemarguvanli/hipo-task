import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';

import Home from 'containers/Home';
import VenueDetail from 'containers/VenueDetail';
import NotFoundPage from 'containers/NotFoundPage';

import './style.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      errorInfo: '',
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;
    console.log(error, errorInfo, 'global error'); // eslint-disable-line
    return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/venue/:id" component={VenueDetail} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
