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
                <li className="active"><Link to="Home">Home<span className="sr-only">(current)</span></Link></li>
                <li><a href="#">My Orders</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="Login">Login</Link></li>
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
        <div>{this.state.user.email}</div>
      );
    }
  }

});

export default Header;