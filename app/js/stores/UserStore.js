'use strict';

import Reflux             from 'reflux';

import UserActions from '../actions/UserActions';
import API from '../utils/API';

var UserStore = Reflux.createStore({

  listenables: [UserActions],

  init() {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.user = null;
    }
  },

  getInitialState() {
    return this.user;
  },

  getState() {
    return this.user;
  },

  onLogin(username, password) {
    API.authenticate('auth', username, password).then(resp => {
      this.user = resp;
      this.trigger(this.user);
      localStorage.setItem('user', JSON.stringify(resp));
      UserActions.Login.completed(resp);
    }).catch(err => {
      UserActions.Login.failed(err);
    });
  }

});

export default UserStore;