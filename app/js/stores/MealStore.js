'use strict';

import Reflux             from 'reflux';

import API from '../utils/API';

var MealStore = Reflux.createStore({

  init() {
    API.get('meals').then(resp => {
      this.meals = resp;
      this.trigger(this.meals);
    });
  },

  getState() {
    return this.meals
  }

});

export default MealStore;