'use strict';

import Reflux             from 'reflux';

import API from '../utils/API';

var RestaurantStore = Reflux.createStore({

  init() {
    API.get('restaurants').then(resp => {
      this.restaurants = resp;
      this.trigger(this.restaurants);
    });
  },

});

export default RestaurantStore;