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
        <section className="container login-page">

          <div className="col-md-4 col-md-offset-4">
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="username" className="sr-only">Username</label>
              <input type="text" name="username" value={this.state.username} onChange={this.updateUsername} id="username" className="form-control" placeholder="Username" required autofocus />
              <br />
              <label htmlFor="password" className="sr-only">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.updatePassword} id="password" className="form-control" placeholder="Password" required />
              <br />
              <button onClick={this.login} name="login" className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
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

  login(e) {
    e.preventDefault()
    console.log(this.state.username)
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