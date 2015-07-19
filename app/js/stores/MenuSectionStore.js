'use strict';

import Reflux             from 'reflux';

import API from '../utils/API';

var MenuSectionStore = Reflux.createStore({

  init() {
    API.get('menusections').then(resp => {
      this.menusections = resp;
      this.trigger(this.menusections);
    });
  },

});

export default MenuSectionStore;