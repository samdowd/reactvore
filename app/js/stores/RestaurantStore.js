'use strict';

import Reflux             from 'reflux';

import UserActions from '../actions/UserActions';
import API from '../utils/API';

var RestaurantStore = Reflux.createStore({

  init() {
    API.get('restaurants').then(resp => {
      this.restaurant = resp;
      this.trigger(this.restaurant);
    });
  },

});

export default RestaurantStore;