'use strict';

import React              from 'react/addons';
import {RouteHandler}     from 'react-router';

import Header             from './components/Header';
import Footer             from './components/Footer';

var App = React.createClass({

  render() {
    return (
      <div>

        <Header />

        <RouteHandler params={this.props.params}
                      query={this.props.query} />

        <Footer />

      </div>
    );
  }

});

export default App;