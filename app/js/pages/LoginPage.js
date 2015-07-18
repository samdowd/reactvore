'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';

var LoginPage = React.createClass({

  mixins: [
    ListenerMixin,
    Navigation
  ],

  getInitialState() {
    return {
      'username': null,
      'password': null
    }
  },

  componentDidMount() {
    this.listenTo(UserActions.Login.completed, this.completed);
    this.listenTo(UserActions.Login.failed, this.failed);
  },

  render() {
    return (
      <DocumentTitle title="Login">
        <section className="login-page">

          <div>
            <label for = "username">Username</label>
            <input type = "text" name = "username" value={this.state.username} onChange={this.updateUsername} />
            <label for = "password">Password</label>
            <input type = "password" name = "password" value={this.state.password} onChange={this.updatePassword} />
            <br />
            <button onClick={this.login} name = "login">Login</button>
          </div>

        </section>
      </DocumentTitle>
    );
  },

  updateUsername(e) {
    this.setState({
      'username': e.target.value
    });
  },

  updatePassword(e) {
    this.setState({
      'password': e.target.value
    });
  },

  login() {
    UserActions.Login(this.state.username, this.state.password);
  },

  completed(user) {
    this.transitionTo('Home');
  },

  failed(error) {
    alert(error.detail);
  }

});

export default LoginPage;