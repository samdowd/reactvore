'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Link}           from 'react-router';
import UserStore        from '../stores/UserStore';


var Header = React.createClass({

  mixins: [
    ListenerMixin,
  ],

  getInitialState() {
    return {
      'user': null
    }
  },

  componentWillMount() {
    UserStore.listen(() => this.setState({user: UserStore.getState()}));
  },

  componentDidMount() {
    this.setState({user: UserStore.getState()});
  },

  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="Home">Localvore</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="Home">Home<span className="sr-only">(current)</span></Link></li>
                <li><Link to="Meals">My Meals</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>{this.renderLoginLink()}</li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    );
  },

  renderLoginLink() {
    if (!this.state.user) {
      return (
        <Link to="Login">Login</Link>
      );
    } else {
      return (
        <p className="navbar-text">What is up, {this.state.user.username}!?</p>
      );
    }
  },
});

export default Header;