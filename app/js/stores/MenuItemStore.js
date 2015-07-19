'use strict';

import Reflux             from 'reflux';

import API from '../utils/API';

var MenuItemStore = Reflux.createStore({

  init() {
    API.get('menuitems').then(resp => {
      this.menuitems = resp;
      this.trigger(this.menuitems);
    });
  },

});

export default MenuItemStore;